import React, { Component } from 'react'

class Weather extends Component {
  render () {
    return (
      <div className="container">
        <div className="cards">
          <h1>{ this.props.city }</h1>
          <h5 className="py-4">
            <i className="wi wi-day-rain display-1" />
          </h5>
          <h2 className="py-2">{ this.props.temp }&deg;</h2>
          <h2>
            <span className="px-4">{ this.props.min }&deg;</span>
            <span className="px-4">{ this.props.max }&deg;</span>
          </h2>
          <h4>{ this.props.descrip}</h4>
        </div>
      </div>
    )
  }
}

export default Weather
