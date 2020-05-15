import React, {Component} from 'react'

const chooseIcon = descrip => {
  let classStr = "display-1 wi wi-"
  switch(true) {
    case descrip.includes('tornado'):
      classStr += 'tornado'
      break
    case descrip.includes('volcanic'):
      classStr += 'volcano'
      break
    case descrip.includes('dust'):
    case descrip.includes('sand'):
      classStr += 'sandstorm'
      break
    case descrip.includes('fog'):
      classStr += 'fog'
      break
    case descrip.includes('smoke'):
      classStr += 'smoke'
      break
    case descrip.includes('haze'):
      classStr += 'day-haze'
      break
    case descrip.includes('clear'):
    case descrip.includes('sun'):
      classStr += 'day-sunny'
      break
    case descrip.includes('freezing'):
      classStr += 'thermometer-exterior'
      break
    case descrip.includes('thunderstorm'):
      classStr += 'thunderstorm'
      break
    case descrip.includes('shower snow'):
    case descrip.includes('sleet'):
    case descrip.includes('rain and snow'):
      classStr += 'rain-mix'
      break
    case descrip.includes('light rain'):
    case descrip.includes('shower'):
      classStr += 'showers'
      break
    case descrip.includes('mist'):
    case descrip.includes('drizzle'):
      classStr += 'sprinkle'
      break
    case descrip.includes('few clouds'):
      classStr += 'cloud'
      break
    case descrip.includes('cloud'):
      classStr += 'cloudy'
      break
    case descrip.includes('snow'):
      classStr += 'snow'
      break
    case descrip.includes('rain'):
      classStr += 'rain'
      break
    default:
      classStr += 'day-cloudy'
  }
  return (
    <i className={classStr} />
  )
}

class Icon extends Component {
  render() {
    return (
      <section>
        <h5>
          { chooseIcon(this.props.descrip) }
        </h5>
      </section>
    )
  }
}

export default Icon
