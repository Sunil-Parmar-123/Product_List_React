import React from 'react'
import "./CountryData.css"

function CountryDataShimmer() {
  return (
    <div>
      {Array.from({length:1}).map((el,i) => <div key={i} className="data"></div>)}
    </div>
  )
}

export default CountryDataShimmer
