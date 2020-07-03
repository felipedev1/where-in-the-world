import React from 'react'
import { SearchGroup, SearchInput } from './styles'
import { FaSearch } from 'react-icons/fa'

export default function Search(props) {
  return (
    <SearchGroup>
      <FaSearch />
      <SearchInput onChange={props.handleSearch} placeholder="Search for a country" />
    </SearchGroup>
  )
}
