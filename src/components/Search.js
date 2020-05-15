import React, {Component, useState} from 'react'
import {Form, Button, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import styled from 'styled-components'

const FormWrapper = styled.section`
  background-color: rgba(255, 255, 255, 0.75);
  border: 5px dotted #008;
  border-radius: 25%;
  margin: 5vh auto;
  max-width: 400px;
  padding: 2vh 7vh;
  text-align: center;
  width: 75vw;
`

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
      <FormWrapper>
        <Form onSubmit={this.props.getForecast}>
          <Form.Control type="text" placeholder="City Name" />
          <ToggleUnitChoice />
          <Button variant="outline-primary" type="submit">Get Weather</Button>
        </Form>
      </FormWrapper>
    )
  }
}

export default Search
