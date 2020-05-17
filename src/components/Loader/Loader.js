import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import style from './Loader.module.scss'

const Loader = ({ classes }) => {
  const loaderClassNames = classNames(style.loader, classes)
  return (
    <div className={ loaderClassNames }>
      <p>Loading.</p>
      <div />
    </div>
  )
}

Loader.prototype = {
  classes: propTypes.string,
}

export default Loader
