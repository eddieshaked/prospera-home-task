import axios from 'axios'

const apiKey = 'dce24c91'
const defaultPath = `http://www.omdbapi.com/?apiKey=${apiKey}`

export const getMovie = async (title) => {
  const result = await axios.get(`${defaultPath}&t=${title}&type=movie`)
  return result.data
}
