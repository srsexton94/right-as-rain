import React from 'react'

const minMax = (min, max) => {
  return (
    <h2>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h2>
  )
}

const Weather = () => {
  return (
    <div className="container">
      <div className="cards">
        <h1>CITY NAME</h1>
        <h5 className="py-4">
          <i className="wi wi-day-rain display-1" />
        </h5>
        <h2 className="py-2">[TEMP]&deg;</h2>
        {minMax('min', 'max')}
        <h4>DESCRIPTION</h4>
      </div>
    </div>
  )
}

export default Weather
