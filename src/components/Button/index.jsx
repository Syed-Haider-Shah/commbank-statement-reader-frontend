import '../index.css'
import { useState } from 'react'
import PropTypes from 'prop-types';

const Button = ({ cusStyle, title }) => {
  const [isHovered, onHover] = useState(false);
  return(
  <>
  <button 
  onMouseEnter={() => onHover(true)} 
  onMouseLeave={() => onHover(false)} 
  className={`btn ${cusStyle} ${isHovered ? 'btn-hover' : ''}`}>{title}</button>
  </>)
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  cusStyle: PropTypes.string,
}

export default Button