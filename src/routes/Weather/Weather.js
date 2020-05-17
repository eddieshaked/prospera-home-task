import React, { useState } from 'react'
import classNames from 'classnames'
import InputDebounce from '../../components/InputDebounce'
import Icon from '../../components/Icon'
import Button from '../../components/Button/Button'
import Loader from '../../components/Loader'
import WeatherCard from './components/WeatherCard'
import { getWeatherByCoordinates, getWeatherByCityName } from '../../services/weatherRoutes'
import styles from './Weather.module.scss'
import Card from '../../components/Card'


const Weather = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [error, setError] = useState(null)

  const getWeatherByPosition = async ({ coords }) => {
    setIsLoading(true)
    try {
      const result = await getWeatherByCoordinates(coords)
      setCurrentWeather(result)
      setIsLoading(false)
      setError(null)
    } catch (e) {
      setError(e)
    }
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeatherByPosition)
    } else {
      // eslint-disable-next-line no-alert
      alert('Geolocation is not supported by this browser.')
    }
  }

  const searchByCityName = async ({ value }) => {
    if (!value) {
      setError(null)
      setCurrentWeather(null)
    } else {
      setIsLoading(true)
      try {
        const result = await getWeatherByCityName(value)
        setError(null)
        setCurrentWeather(result)
      } catch (e) {
        setCurrentWeather(null)
        setError(e)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const renderError = () => (
    <Card className={ classNames(styles.error) }>
      <>
        <Icon icon="error" />
        <p>{ error.message }</p>
      </>
    </Card>
  )

  return (
    <main className={ classNames(styles.weather) }>
      <div className={ classNames(styles.searchContainer) }>
        <InputDebounce
          icon={ <Icon icon="search" /> }
          label="City Name"
          classes={ classNames(styles.searchInput) }
          onChange={ searchByCityName }
        />
        <Button variant="ghost" onClick={ getLocation }>My Location Weather</Button>
      </div>
      { isLoading && <Loader classes={ classNames(styles.loader) } /> }
      { !isLoading && <WeatherCard weatherObject={ currentWeather } /> }
      { !isLoading && error && renderError() }
    </main>
  )
}

export default Weather
