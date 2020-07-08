import React, { useState } from 'react'
import { Filter, StyledHome, Countries } from './styles'
import Search from '../../components/Search'
import Select from '../../components/Select'
import Card from '../../components/Card'
import { CardImage, CardContent } from '../../components/Card/styles'

export default function Home() {
  const [countrySearch, setCountrySearch] = useState('')
  const [regionSelected, setRegionSelected] = useState('')

  return (
    <StyledHome>
      <Filter>
        <Search handleSearch={(e) => setCountrySearch(e.target.value)} />
        <Select onChange={(selectedOption) => setRegionSelected(selectedOption)} 
          placeholder="Filter by Region"
          options={[{text: "Africa"}, {text: "Americas"}, {text: "Asia"}, {text: "Europe"}, {text: "Oceania"}]} 
        />
      </Filter>
      <Countries>
        <Card>
          <CardImage src="https://restcountries.eu/data/bra.svg" alt="Brazil" />
          <CardContent>
            <h3>Brazil</h3>
            <ul>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
            </ul>
          </CardContent>
          <div></div>
        </Card>
        <Card>
          <CardImage src="https://restcountries.eu/data/bra.svg" alt="Brazil" />
          <CardContent>
            <h3>Brazil</h3>
            <ul>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
            </ul>
          </CardContent>
          <div></div>
        </Card>
        <Card>
          <CardImage src="https://restcountries.eu/data/bra.svg" alt="Brazil" />
          <CardContent>
            <h3>Brazil</h3>
            <ul>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
            </ul>
          </CardContent>
          <div></div>
        </Card>
        <Card>
          <CardImage src="https://restcountries.eu/data/bra.svg" alt="Brazil" />
          <CardContent>
            <h3>Brazil</h3>
            <ul>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
            </ul>
          </CardContent>
          <div></div>
        </Card>
        <Card>
          <CardImage src="https://restcountries.eu/data/bra.svg" alt="Brazil" />
          <CardContent>
            <h3>Brazil</h3>
            <ul>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
            </ul>
          </CardContent>
          <div></div>
        </Card>
        <Card>
          <CardImage src="https://restcountries.eu/data/bra.svg" alt="Brazil" />
          <CardContent>
            <h3>Brazil</h3>
            <ul>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
            </ul>
          </CardContent>
          <div></div>
        </Card>
        <Card>
          <CardImage src="https://restcountries.eu/data/bra.svg" alt="Brazil" />
          <CardContent>
            <h3>Brazil</h3>
            <ul>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
            </ul>
          </CardContent>
          <div></div>
        </Card>
        <Card>
          <CardImage src="https://restcountries.eu/data/bra.svg" alt="Brazil" />
          <CardContent>
            <h3>Brazil</h3>
            <ul>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
              <li><strong>Population: </strong>12329.1</li>
            </ul>
          </CardContent>
          <div></div>
        </Card>
      </Countries>
    </StyledHome>
  )
}
