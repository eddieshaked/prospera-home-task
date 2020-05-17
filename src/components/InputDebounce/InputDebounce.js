import React from 'react'
import propTypes from 'prop-types'
import Input from '../Input'


const InputDebounce = ({ delay, onChange, ...otherProps }) => {
  let timeout

  const onChangeHandler = async (target) => {
    clearTimeout(timeout)
    timeout = setTimeout(async () => {
      onChange(target)
    }, delay)
  }

  return <Input onChange={ onChangeHandler } { ...otherProps } />
}

InputDebounce.defaultProps = {
  delay: 500,
}

InputDebounce.propTypes = {
  delay: propTypes.number,
  onChange: propTypes.func,
}

export default InputDebounce
