import axios from 'axios'

const apiKey = 'c2152ce33eec94f628bcb40cda3da446'
const defaultPath = `http://api.openweathermap.org/data/2.5/weather/?APPID=${apiKey}&units=metric`

export const getWeatherByCityName = async (cityName) => {
  const result = await axios.get(`${defaultPath}&q=${cityName}`)
  return result.data
}

export const getWeatherByCoordinates = async ({ latitude, longitude }) => {
  const result = await axios.get(`${defaultPath}&lat=${latitude}&lon=${longitude}`)
  return result.data
}
