import '../index.css'
import { useState } from 'react'
import PropTypes from 'prop-types';

const Button = ({ cusStyle }) => {
  const [isHovered, onHover] = useState(false);
  return(
  <>
  <button 
  onMouseEnter={() => onHover(true)} 
  onMouseLeave={() => onHover(false)} 
  className={`btn ${cusStyle} ${isHovered ? 'btn-hover' : ''}`}>Upload Another</button>
  </>)
}

Button.propTypes = {
  cusStyle: PropTypes.string.isRequired,
}

export default Button