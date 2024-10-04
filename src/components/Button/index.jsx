import '../index.css'
import { useState } from 'react'
import PropTypes from 'prop-types';

const Button = ({ cusStyle, title, hoverProperty }) => {
  const [isHovered, onHover] = useState(false);
  return(
  <>
  <button 
  onMouseEnter={() => onHover(true)} 
  onMouseLeave={() => onHover(false)} 
  className={`btn ${cusStyle} ${isHovered ? hoverProperty : ''}`}>{title}</button>
  </>)
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  cusStyle: PropTypes.string,
  hoverProperty: PropTypes.string,
}

export default Button