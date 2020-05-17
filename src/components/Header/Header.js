import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Header.module.scss'

const Header = ({ children }) => {
  const classes = classNames(styles.header)
  return (
    <header className={ classes }>
      { children }
    </header>
  )
}

Header.propTypes = {
  children: propTypes.element,
}


export default Header
