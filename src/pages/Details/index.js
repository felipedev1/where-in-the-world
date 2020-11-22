import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import api from '../../services/api'
import { StyledDetails, BackButton, CountryDiv, CountryInfo, BorderCountries, BorderCountryLink } from './styles'


export default function Details() {

  const [country, setCountry] = useState()
  const { endPoint, countrySearched } = useParams()

  useEffect(() => {
    api.get(`/${endPoint}/${countrySearched}?fullText=true`)
      .then(res => {
        if(Array.isArray(res.data)) {
          setCountry(res.data[0])
        } else {
          setCountry(res.data)
        }
      })
  }, [countrySearched, endPoint])

  return (
    <StyledDetails>
      <BackButton to="/">
        <FaArrowLeft />
        <span>Back</span>
      </BackButton>
      {country && (
        <CountryDiv>
          <img src={country.flag} alt={`${country.name}'s flag`} />
          <CountryInfo>
            <h2>{country.name}</h2>
            <ul>
              <li>
                <strong>Native Name: </strong>
                <span>{country.nativeName}</span>
              </li>
              <li>
                <strong>Population: </strong>
                <span>{country.population}</span>
              </li>
              <li>
                <strong>Region: </strong>
                <span>{country.region}</span>
              </li>
              <li>
                <strong>Sub Region: </strong>
                <span>{country.subregion}</span>
              </li>
              <li>
                <strong>Capital: </strong>
                <span>{country.capital} </span>
              </li>
              <li>
                <strong>Top Level Domain: </strong>
                <span>
                  {country.topLevelDomain.map((domain, index) => {
                    return country.topLevelDomain.length !== (index + 1) ? `${domain}, ` : domain
                  })}
                </span>
              </li>
              <li>
                <strong>Currencies: </strong>
                <span>
                  {country.currencies.map((currency, index) => {
                    return country.currencies.length !== (index + 1) ? `${currency.name}, ` : currency.name
                  })}
                </span>
                
              </li>
              <li>
                <strong>Languages: </strong>
                <span>{country.languages.map((language, index) => {
                    return country.languages.length !== (index + 1) ? `${language.name}, ` : language.name
                  })}
                </span>
              </li>
            </ul>
            <BorderCountries>
              <strong>Border Countries: </strong>
              {country.borders.map(border => (
                <BorderCountryLink key={border} to={`/details/alpha/${border}`}>{border}</BorderCountryLink>
              ))}
            </BorderCountries>
          </CountryInfo>
        </CountryDiv>
      )}
    </StyledDetails>
  )
}
