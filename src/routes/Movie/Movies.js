import React, { useState } from 'react'
import classNames from 'classnames'
import { getMovie } from '../../services/moviesRoutes'
import InputDebounce from '../../components/InputDebounce'
import Icon from '../../components/Icon'
import Loader from '../../components/Loader'
import MovieCard from './componets/MovieCard'
import styles from './Movies.module.scss'

const Movies = () => {
  const [searchedMovie, setSearchedMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const classes = classNames(styles.movies)

  const searchMovie = async ({ value }) => {
    if (!value) {
      setSearchedMovie(null)
    } else {
      setIsLoading(true)
      const result = await getMovie(value)
      setIsLoading(false)
      setSearchedMovie(result)
    }
  }

  return (
    <main className={ classes }>
      <InputDebounce
        icon={ <Icon icon="search" /> }
        label="Search"
        onChange={ searchMovie }
      />
      { isLoading && <Loader classes={ styles.loader } /> }
      { !isLoading && searchedMovie && <MovieCard movie={ searchedMovie } /> }
    </main>
  )
}

export default Movies
