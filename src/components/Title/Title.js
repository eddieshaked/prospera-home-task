import React from 'react'
import protTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Title.module.scss'

const Title = ({ title, onClick }) => (
  <h1 className={ styles.title }>
    <Link to="/" onClick={ onClick }>{ title }</Link>
  </h1>
)


Title.defaultProps = {
  onClick: () => {},
}

Title.propTypes = {
  title: protTypes.string.isRequired,
  onClick: protTypes.func,
}

export default Title
