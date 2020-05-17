import React from 'react'
import classNames from 'classnames'
import styles from './Home.module.scss'

const Home = () => {
  const classes = classNames(styles.home)
  return (
    <main className={ classes }>
      <p>
        Welcome to Prospera home test.
        <br />
        Hope you will love this application.
      </p>
    </main>
  )
}

export default Home
