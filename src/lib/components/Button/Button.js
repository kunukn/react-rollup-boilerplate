import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Button = ({
  onClick,
  disabled,
  className,
  children,
}) => (
  <button
    type="button"
    className={`button ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
}

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  className: null,
  children: 'Click Me',
}

export default Button
