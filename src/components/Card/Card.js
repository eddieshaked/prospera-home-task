import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Card.module.scss'

const Card = ({ children, className, style }) => {
  const classes = classNames(
    styles.card,
    className,
  )

  return (
    <div className={ classes } style={ style }>
      { children }
    </div>
  )
}

Card.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: propTypes.object,
  children: propTypes.element,
  className: propTypes.string,
}


export default Card
