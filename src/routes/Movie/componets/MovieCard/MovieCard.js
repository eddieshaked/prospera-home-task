import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import Card from '../../../../components/Card'
import Icon from '../../../../components/Icon'
import styles from './MovieCard.module.scss'


const MovieCard = ({ movie }) => {
  if (!movie) {
    return null
  }
  const { Error } = movie
  const cardClasses = classNames(
    styles.card,
    Error && styles.error,
  )

  const renderMovieHeader = () => {
    const { Title, Year } = movie
    const movieHeaderClasses = classNames(styles.movieHeader)
    return (
      <div className={ movieHeaderClasses }>
        <h2>{ Title }</h2>
        <p>{ Year }</p>
      </div>
    )
  }

  const renderMovieInfo = () => {
    const {
      Plot, Writer, Director, imdbID,
    } = movie
    const movieInfoClasses = classNames(styles.movieInfo)
    return (
      <div className={ movieInfoClasses }>
        <p>{ Plot }</p>
        <ul>
          <li>
            <p>
              <b>Director:</b>
              { Director }
            </p>
          </li>
          <li>
            <p>
              <b>Writer:</b>
              { Writer }
            </p>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href={ `https://www.imdb.com/title/${imdbID}/` }>IMDB</a>
          </li>
        </ul>
      </div>
    )
  }

  const renderMovieFooter = () => {
    const movieFooterClasses = classNames(styles.movieFooter)
    const {
      imdbRating, Runtime, Genre, Language,
    } = movie

    return (
      <div className={ movieFooterClasses }>
        <div className={ classNames(styles.rating) }>
          <Icon icon="star" />
          { imdbRating }
        </div>
        <div>
          <Icon icon="timer" />
          { Runtime }
        </div>
        <p>{ Genre }</p>
        <p>{ Language }</p>
      </div>
    )
  }

  const renderMovie = () => {
    if (Error) {
      return (
        <>
          <Icon icon="error" />
          <p>{ Error }</p>
        </>
      )
    }
    const { Poster } = movie
    return (
      <>
        <img src={ Poster } alt="poster" />
        <div className={ classNames(styles.movieContainer) }>
          { renderMovieHeader() }
          { renderMovieInfo() }
          { renderMovieFooter() }
        </div>
      </>
    )
  }

  return (
    <Card className={ cardClasses }>
      { renderMovie() }
    </Card>
  )
}


MovieCard.propTypes = {
  movie: propTypes.shape({
    Poster: propTypes.string,
    Error: propTypes.string,
    Plot: propTypes.string,
    Writer: propTypes.string,
    Director: propTypes.string,
    imdbRating: propTypes.string,
    Runtime: propTypes.string,
    Genre: propTypes.string,
    Language: propTypes.string,
    Title: propTypes.string,
    Year: propTypes.string,
    imdbID: propTypes.string,
  }),
}

export default MovieCard
