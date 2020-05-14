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
  getForecast = event => {
    event.preventDefault() // prevents page refresh
    const formdata = Object
      .entries(event.target.elements)
      .map(input => input[1].value)
    const cityName = formdata[0]
    axios(`${api.url}${cityName}&appid=${api.key}`)
      .then(res => {
        console.log('cityName: ', res.data.city.name)
        console.log('list[0]: ', res.data.list[0])
        console.log('list[1]: ', res.data.list[1])
      })
      .catch(err => {
        console.log('forecast error: ', err)
      })
  }

  render () {
    return (
      <div className="App">
        <Search getForecast={this.getForecast}/>
        <Weather />
      </div>
    )
  }
}

export default App;
