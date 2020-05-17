import React, { useState, memo } from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Input.module.scss'

const elements = Object.freeze({
  INPUT: 'input',
  TEXTAREA: 'textarea',
})

const Input = ({
  label,
  type,
  value,
  defaultValue,
  multiline,
  classes,
  rows,
  icon,
  onChange,
  ...otherProps
}) => {
  const [hasValue, setHasValue] = useState(false)
  const containerClasses = classNames(
    styles.inputContainer,
    label && styles.withLabel,
    hasValue && styles.hasValue,
    classes,
  )
  const inputClasses = classNames(
    styles.input,
  )

  let InputElement = elements.INPUT
  let inputProps = otherProps
  if (multiline) {
    InputElement = elements.TEXTAREA
    inputProps = { ...inputProps, rows }
  } else {
    inputProps = { ...inputProps, type }
  }

  const onChangeHandler = (e) => {
    const { target } = e
    const elementValue = target.value
    setHasValue(!!elementValue)
    onChange(target)
  }

  return (
    <div className={ containerClasses }>
      { label && <label>{ label }</label> }
      <InputElement
        className={ inputClasses }
        onChange={ onChangeHandler }
        value={ value }
        defaultValue={ defaultValue }
        { ...inputProps }
      />
      { icon && icon }
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  onChange: () => {},
}

Input.propTypes = {
  rows: propTypes.oneOf([propTypes.string, propTypes.number]),
  icon: propTypes.element,
  type: propTypes.string,
  value: propTypes.oneOf([propTypes.string, propTypes.number]),
  label: propTypes.string,
  classes: propTypes.string,
  multiline: propTypes.bool,
  defaultValue: propTypes.oneOf([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
}

export default memo(Input)
