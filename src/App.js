import React, {Component} from 'react'
import api from './apiConfig.js'
import axios from 'axios'

// libraries and icons
import 'bootstrap/dist/css/bootstrap.min.css'
import './weather-icons/css/weather-icons.min.css'

// components
import Search from './components/Search'
import Weather from './components/Weather'

class App extends Component {
  state = {}

  getForecast = event => {
    event.preventDefault() // prevents page refresh

    const formdata = Object
      .entries(event.target.elements)
      .map(input => {
        if (input[1].checked) {
          this.setState({ unit: input[1].value.charAt(0).toUpperCase() })
        }
        return input[1].value
      })
    const cityName = formdata[0]
    axios(`${api.url}${cityName}&appid=${api.key}`)
      .then(res => {
        this.setState({
          city: res.data.city.name,
          descrip: res.data.list[0].weather[0].description,
          temp: res.data.list[0].main.temp,
          min: res.data.list[0].main.temp_min,
          max: res.data.list[0].main.temp_max,
          err: ''
        })
      })
      .catch(err => {
        console.log('forecast error: ', err)
      })
    event.target.reset()
  }

  render () {
    return (
    <div className="App">
        <Search getForecast={this.getForecast}/>
        <Weather
          city={this.state.city}
          descrip={this.state.descrip}
          temp={this.state.temp}
          min={this.state.min}
          max={this.state.max}
          unit={this.state.unit}
          err={this.state.err}
        />
      </div>
    )
  }
}

export default App;
