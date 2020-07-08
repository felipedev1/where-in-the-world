import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Filter, StyledHome, Countries } from './styles'
import Search from '../../components/Search'
import Select from '../../components/Select'
import Card from '../../components/Card'
import { CardImage, CardContent } from '../../components/Card/styles'

export default function Home() {
  const [countrySearch, setCountrySearch] = useState('')
  const [regionSelected, setRegionSelected] = useState('')
  const [countries, setCountries] = useState()

  useEffect(() => {
    api.get('all', {
      params: {
        fields: "name;flag;population;region;capital"
      }
    })
      .then(res => setCountries(res.data))
  }, [])

  return (
    <StyledHome>
      <Filter>
        <Search handleSearch={(e) => setCountrySearch(e.target.value)} />
        <Select onChange={(selectedOption) => setRegionSelected(selectedOption)}
          placeholder="Filter by Region"
          options={[{ text: "Africa" }, { text: "Americas" }, { text: "Asia" }, { text: "Europe" }, { text: "Oceania" }]}
        />
      </Filter>
      <Countries>
        {countries && countries.map(country => {
          return (
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
          )
        })}
      </Countries>
    </StyledHome>
  )
}
