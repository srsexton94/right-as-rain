import React, { Component } from 'react'
import Temps from './Temps'
import Icon from './Icon'
import styled from 'styled-components'

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.75);
  border: 5px dotted #008;
  border-radius: 25%;
  margin: auto;
  max-width: 700px;
  text-align: center;
  width: 80vw;
  color: #008;
  padding: 5vh;
`

class Weather extends Component {
  render () {
    return (
      <div className="container">
      { this.props.city &&
        <Card className="cards">
          <h1>{ this.props.city }</h1>
          <Icon descrip={this.props.descrip}/>
          <Temps
            temp={this.props.temp}
            min={this.props.min}
            max={this.props.max}
            unit={this.props.unit}
          />
          <h4>{ this.props.descrip}</h4>
        </Card>
      }
      </div>
    )
  }
}

export default Weather
