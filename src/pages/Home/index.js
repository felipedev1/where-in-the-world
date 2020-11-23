import React, { useState, useEffect, useMemo } from 'react'
import api from '../../services/api'
import { Filter, StyledHome, Countries } from './styles'
import Search from '../../components/Search'
import Select from '../../components/Select'
import Card from '../../components/Card'
import { CardImage, CardContent } from '../../components/Card/styles'
import { Link } from 'react-router-dom'

const countryParams = {
  params: {
    fields: "name;flag;population;region;capital"
  }
}

export default function Home() {
  const [countrySearch, setCountrySearch] = useState('')
  const [regionSelected, setRegionSelected] = useState('all')
  const [countries, setCountries] = useState()
  const [paginate, setPaginate] = useState(15)

  //get all countries
  useEffect(() => {
    api.get('all', {
      countryParams
    })
      .then(res => setCountries(res.data))
  }, [])

  useEffect(() => {
    setPaginate(15)
  }, [regionSelected, countrySearch])

  const filterCountries = () => {
    if(!countries) {
      return []
    }

    let filteredCountries = []

    if (regionSelected && regionSelected === 'all') {
      filteredCountries = countries
    }

    if (countrySearch && (regionSelected && regionSelected !== 'all')) {
      filteredCountries = countries.filter(country => {
        return (country.region === regionSelected)
          && (country.name.toLowerCase().includes(countrySearch.toLowerCase()))
      })
    } else if (countrySearch) {
      filteredCountries = countries.filter(country => {
        return country.name.toLowerCase().includes(countrySearch.toLowerCase())
      })
    } else if (regionSelected && regionSelected !== 'all') {
      filteredCountries = countries.filter(country => {
        return country.region === regionSelected
      })
    }

    return filteredCountries
  }
  
  const renderCountries = () => {
    
    if (!filteredCountries || !filteredCountries[0]) {
      return <p>No Country Found!</p>
    } else {
      const paginatedCountries = filteredCountries.slice(0, paginate)

      return paginatedCountries.map((country) => (
        <Link to={`details/name/${country.name}`} key={country.name}>
          <Card>
            <CardImage src={country.flag} alt={country.name} />
            <CardContent>
              <h3>{country.name}</h3>
              <ul>
                <li><strong>Population: </strong>{country.population}</li>
                <li><strong>Region: </strong>{country.region}</li>
                <li><strong>Capital: </strong>{country.capital}</li>
              </ul>
            </CardContent>
          </Card>
        </Link>
      ))
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filteredCountries = useMemo(() => filterCountries(), [countrySearch, regionSelected, countries])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const renderedCountries = useMemo(() => renderCountries(), [countrySearch, regionSelected, countries, paginate])
  
  
  return (
    <StyledHome>
      <Filter>
        <Search handleSearch={(e) => setCountrySearch(e.target.value)} />
        <Select onChange={(selectedOption) => setRegionSelected(selectedOption || 'all')}
          placeholder="Filter by Region"
          options={[
            { value: "all", text: "All countries" },
            { text: "Africa" },
            { text: "Americas" },
            { text: "Asia" },
            { text: "Europe" },
            { text: "Oceania" }]}
        />
      </Filter>
      {countries && (
        <Countries 
          pageStart={0}
          loadMore={() => setPaginate(prev => prev + 15)}
          hasMore={paginate < filteredCountries.length}
        >
          {renderedCountries}
        </Countries>
      )}
    </StyledHome>
  )
}
