import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'

class Search extends Component {
  render () {
    return (
      <Form onSubmit={this.props.getLocation}>
        <Form.Control type="text" placeholder="City Name" />
        <Button variant="primary" type="submit">Get Weather</Button>
      </Form>
    )
  }
}

export default Search
