import { useEffect, useState } from 'react'
import './CountryDetail.css'
import { Link, useLocation, useParams } from 'react-router-dom'
import CountryDetailShimmer from './CountryDetailShimmer'
import { useTheme } from '../hooks/useTheme'

export default function CountryDetail() {
  const [isDark] = useTheme()
  const [countryData, setCountryData] = useState([])
  const [notFound, setNotFound] = useState(false)
  const params = useParams()
  const countryName = params.country
  const {state} = useLocation()
  console.log(useLocation())

  function updateCountryData(countryData){
    setCountryData({
      name: countryData.name.common,
      nativeName: countryData.name.nativeName && Object.values(countryData.name.nativeName)[0].common,
      currencies: countryData.currencies && Object.values(countryData.currencies)[0].name,
      subregion: countryData.subregion,
      region: countryData.region,
      population: countryData.population.toLocaleString('en-Pk'),
      capital: countryData.capital && countryData.capital.join(', '),
      flag: countryData.flags.svg,
      languages: countryData.languages && Object.values(countryData.languages).join(', '),
      tld: countryData.tld.join(', '),
      key: countryName,
      borders: []
    })

    if(!countryData.borders){
      countryData.borders = []
    }

    Promise.all(countryData.borders.map((border) => {
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then(res => res.json())
      .then(([data]) => data.name.common)
    })).then((borders) => {
      setCountryData((pervState) => {
        return {
          ...pervState,
          borders,
        }
      })
    })
  }

  useEffect(() => {

    if(state){
      updateCountryData(state)
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then(res => res.json())
    .then(([countryData]) => {
      updateCountryData(countryData)
  }).catch((error) => {
    console.log(error)
    setNotFound(true)
  })
    
  }, [countryName])

  if(notFound){
    return <div style={{textAlign: 'center', fontSize: 32,}}>Country not found </div>
  }

  return countryData === null ? ( <CountryDetailShimmer /> ) : (
    <main id='main' className={`${isDark ? 'dark' : ''}`}>
    <div id="back">
      <button id="back-btn" onClick={() => history.back()}><i className="fa-solid fa-arrow-left-long"></i><span>Back</span></button>
    </div>
     <div id="country-detail-card">
     <div id="left-part">
        <img id="flag" src={countryData.flag} alt="" />
      </div>
      <div id="right-part">
        <div id="heading">
          <h2 id="country-name">{countryData.name}</h2>
        </div>
        <div id="center">
          <div id="center-left">
            <p><b>Native Name:</b> <span id="native-name">{countryData.nativeName}</span></p>
            <p><b>Region:</b> <span id="region">{countryData.region}</span></p>
            <p><b>Population:</b> <span id="population">{countryData.population}</span></p>
            <p><b>Sub Region:</b> <span id="sub-region">{countryData.subregion}</span></p>
            <p><b>Capital:</b> <span id="capital">{countryData.capital}</span></p>
          </div>
          <div id="center-right">
            <p><b>Top Level Domain: <span id="TLD">{countryData.tld}</span></b></p>
            <p><b>Currencies:</b> <span id="currencies">{countryData.currencies}</span></p>
            <p><b>Languages:</b> <span id="languages">{countryData.languages}</span></p>
          </div>
        </div>
        {countryData.borders && <div id="bottom">
          <p><b>Border Countries:</b></p>
          {
            countryData.borders.map((border) => {
              return <Link key={border} to={`/${border}`}>{border}</Link>
            })
          }
        </div>}
      </div> 
    </div>
  </main>
  )
}
