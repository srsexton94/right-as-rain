import React from 'react';
import './App.css';
import Weather from './components/Weather.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './weather-icons/css/weather-icons.min.css'

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
