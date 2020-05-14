import React, {Component} from 'react';
import './App.css'
import api from './apiConfig.js'
import axios from 'axios'

// libraries and icons
import 'bootstrap/dist/css/bootstrap.min.css'
import './weather-icons/css/weather-icons.min.css'

// components
import Search from './components/Search'
import Weather from './components/Weather'

class App extends Component {
  getForecast = key => {
    axios(`${api.forecastUrl}${key}?apikey=${api.key}`)
      .then(res => {
        console.log(res.data.DailyForecasts)
      })
      .catch(err => {
        console.log('forecast error: ', err)
      })
  }
  getLocation = event => {
    event.preventDefault() // prevents page refresh
    // gets city name from form submission
    const formdata = Object
      .entries(event.target.elements)
      .map(input => input[1].value)
    const cityName = formdata[0]
    axios(`${api.locationUrl}?apikey=${api.key}&q=${cityName}`)
      .then(res => {
        this.getForecast(res.data[0].Key)
      })
      .catch(err => {
        console.log('location error: ', err)
      })
      event.target.reset() // clears the form
  }

  render () {
    return (
      <div className="App">
        <Search getLocation={this.getLocation}/>
        <Weather />
      </div>
    )
  }
}

export default App;
