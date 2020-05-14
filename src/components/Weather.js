import React, { Component } from 'react'
import Temps from './Temps'

class Weather extends Component {
  render () {
    return (
      <div className="container">
      { this.props.city &&
        <div className="cards">
          <h1>{ this.props.city }</h1>
          <h5 className="py-4">
            <i className="wi wi-day-rain display-1" />
          </h5>
          <Temps 
            temp={this.props.temp}
            min={this.props.min}
            max={this.props.max}
            unit={this.props.unit}
          />
          <h4>{ this.props.descrip}</h4>
        </div>
      }
      </div>
    )
  }
}

export default Weather
