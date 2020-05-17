import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import moment from 'moment'
import Card from '../../../../components/Card'
import styles from './WeatherCard.module.scss'

const WeatherCard = ({ weatherObject }) => {
  if (!weatherObject) {
    return null
  }
  const {
    name,
    sys,
    weather: weatherArray,
    main,
  } = weatherObject
  const weather = weatherArray[0]
  const cardClasses = classNames(styles.card)

  const renderTableColumns = (key) => {
    let temp = `${main[key]} °C`
    const title = key.replace('_', ' ')

    if (key === 'humidity') {
      temp = `${main[key]} %`
    }

    if (key === 'pressure') {
      temp = `${main[key]} hpa`
    }

    return (
      <tr key={ key }>
        <td>{ title }</td>
        <td>{ temp }</td>
      </tr>
    )
  }

  const renderTempList = () => (
    <table>
      <tbody>
        { Object.keys(main).map(renderTableColumns) }
      </tbody>
    </table>
  )

  const renderHeader = () => {
    const headerClasses = classNames(styles.header)
    const title = `${name}, ${sys.country}`
    return (
      <div className={ headerClasses }>
        <h3>{ title }</h3>
        <p>{ moment().format('dddd, HH:mm') }</p>
      </div>
    )
  }

  const renderWeatherStatus = () => (
    <div className={ classNames(styles.description) }>
      <p>{ `${weather.main} - ${weather.description}` }</p>
    </div>
  )

  const renderInfo = () => (
    <div className={ classNames(styles.tempContainer) }>
      { renderTempList() }
    </div>
  )
  const imageSrc = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
  const style = {
    backgroundImage: `url(${imageSrc})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: 'right',
  }
  return (
    <Card className={ cardClasses } style={ style }>
      <>
        { renderHeader() }
        { renderWeatherStatus() }
        { renderInfo() }
      </>
    </Card>
  )
}

WeatherCard.propTypes = {
  weatherObject: propTypes.shape({
    name: propTypes.string,
    sys: propTypes.object,
    weather: propTypes.array,
    main: propTypes.object,
  }),
}

export default WeatherCard
