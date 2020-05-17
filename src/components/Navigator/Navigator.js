import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import styles from './Navigator.module.scss'

const Navigator = ({ routes, selectedItem, onItemClick }) => {
  if (!routes) {
    return null
  }

  const classes = classNames(styles.navigator)

  // eslint-disable-next-line react/prop-types
  const renderItem = ({ route, name }) => {
    const isSelected = route === selectedItem
    const itemClasses = classNames(isSelected && styles.selected)
    return (
      <li key={ route } className={ itemClasses }>
        <Link to={ route } onClick={ () => onItemClick(route) }>{ name }</Link>
      </li>
    )
  }

  const renderRoutes = () => (
    <ul className={ classes }>
      { routes.map(renderItem) }
    </ul>
  )

  return (
    <nav>
      { renderRoutes() }
    </nav>
  )
}

Navigator.defaultProps = {
  onItemClick: () => {},
}

Navigator.propTypes = {
  routes: propTypes.arrayOf(propTypes.shape({
    route: propTypes.string,
    name: propTypes.string,
  })).isRequired,
  onItemClick: propTypes.func,
  selectedItem: propTypes.string,
}


export default Navigator
