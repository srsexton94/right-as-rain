import React, {Component, useState} from 'react'
import {Form, Button, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'

function ToggleUnitChoice() {
  const [value, setValue] = useState('fahrenheit')

  const handleChange = val => setValue(val)

  return (
    <ToggleButtonGroup type="radio" name="unit" value={value} onChange={handleChange}>
      <ToggleButton value={'fahrenheit'}>F</ToggleButton>
      <ToggleButton value={'celcius'}>C</ToggleButton>
    </ToggleButtonGroup>
  )
}

class Search extends Component {
  render () {
    return (
      <Form onSubmit={this.props.getForecast}>
        <Form.Control type="text" placeholder="City Name" />
        <ToggleUnitChoice />
        <Button variant="primary" type="submit">Get Weather</Button>
      </Form>
    )
  }
}

export default Search
