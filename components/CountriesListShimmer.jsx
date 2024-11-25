import React from 'react'

export default function CountriesListShimmer() {

 

  return (
    <div id='countries-container'>
      {
         Array.from({length: 15}).map((elem) => {
          return <div className='country-card' style={{backgroundColor: 'rgba(0, 0, 0, 0.167)'}}></div>
        })
      }
    </div>
  )
}

