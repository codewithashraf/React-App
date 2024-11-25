import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryCard({ name, flag, population, region, capital, data}) {
  return (
    <Link className="country-card" id='key' to={`/${name}`} state={data} >
      <img src={flag}  />
      <div id="card-data">
        <h3>{name}</h3>
        <p><b>Population:</b> <span>{population}</span> </p>
        <p><b>Region:</b><span> {region}</span></p>
        <p><b>Capital:</b><span> {capital}</span></p>
      </div>
    </Link>
  )
}
