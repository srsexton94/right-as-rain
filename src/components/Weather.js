import React, { Component } from 'react'
import Temps from './Temps'
import Icon from './Icon'

class Weather extends Component {
  render () {
    return (
      <div className="container">
      { this.props.city &&
        <div className="cards">
          <h1>{ this.props.city }</h1>
          <Icon descrip={this.props.descrip}/>
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
