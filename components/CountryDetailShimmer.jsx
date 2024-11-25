import React from 'react'

export default function CountryDetailShimmer() {
  return (
    <>
      <main id='main'>
    <div id="back">
      <button id="back-btn" style={{backgroundColor: '#252525'}}><i className="fa-solid fa-arrow-left-long" style={{opacity: .2}}></i><span></span></button>
    </div>
     <div id="country-detail-card">
     <div id="left-part">
        <img id="flag" src='' alt="" style={{backgroundColor: '#252525'}}/>
      </div>
      <div id="right-part">
        <div id="heading">
          <h2 id="country-name" style={{backgroundColor: '#252525', height: '8vmin', width: '30vmin'}}></h2>
        </div>
        <div id="center">
          <div id="center-left">
            {Array.from({length: 5}).map((elem) => {
              return <p style={{backgroundColor: '#252525', height: '4vmin', width: '20vmin'}}></p>
            })}
          </div>
          <div id="center-right">
            {
              Array.from({length: 3}).map((elem) => {
                return <p style={{backgroundColor: '#252525', height: '4vmin', width: '20vmin'}}></p>
              })
            }
          </div>
        </div>
      </div> 
    </div>
  </main>
    </>
  )
}
