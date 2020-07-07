import React, { useState } from 'react'
import { Filter, StyledHome } from './styles'
import Search from '../../components/Search'
import Select from '../../components/Select'

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
    </StyledHome>
  )
}
