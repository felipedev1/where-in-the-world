import React, { useState } from 'react'
import { Filter, StyledHome } from './styles'
import Search from '../../components/Search'

export default function Home() {
  const [countrySearch, setCountrySearch] = useState('')

  function handleSearch(e) {
    setCountrySearch(e.target.value)
    console.log(countrySearch)
  }

  return (
    <StyledHome>
      <Filter>
        <Search handleSearch={handleSearch} />
      </Filter>
    </StyledHome>
  )
}
