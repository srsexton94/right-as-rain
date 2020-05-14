import React, {Component} from 'react'

const convert = (temp, unit) => {
  temp = temp - 273.15
  if (unit === 'F') {
    temp = temp * ( 9 / 5 ) + 32
  }
  return temp.toFixed(1)
}

class Temps extends Component {
  render() {
    return (
      <section>
        <h2 className="py-2">
          { convert(this.props.temp, this.props.unit) }&deg;{ this.props.unit }
        </h2>
        <h3>
          <span className="px-4">
            { convert(this.props.min, this.props.unit) }&deg;{ this.props.unit }
          </span>
          <span className="px-4">
            { convert(this.props.max, this.props.unit) }&deg;{ this.props.unit }
          </span>
        </h3>
      </section>
    )
  }
}

export default Temps
