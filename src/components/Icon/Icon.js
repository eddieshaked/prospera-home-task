import React, { memo } from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import '../../assets/fonts/material-Icons-font/index.scss'
import styles from './Icon.module.scss'

// Supported icons - https://material.io/tools/icons/?style=baseline
const getIconClass = (theme) => {
  const defaultIconClass = 'material-icons'
  return theme ? `${defaultIconClass}-${theme}` : defaultIconClass
}

const Icon = ({ theme, icon, classes }) => {
  const iconClassNames = classNames(
    styles.icon,
    getIconClass(theme),
    classes,
  )
  return (
    <i className={ iconClassNames }>{ icon }</i>
  )
}

Icon.propTypes = {
  icon: propTypes.string,
  classes: propTypes.string,
  theme: propTypes.oneOf(['sharp', 'two-tone', 'round', 'outlined']),
}


export default memo(Icon)
