import '../index.css'
import { useState } from 'react'
import PropTypes from 'prop-types';

const Button = ({ cusStyle, title, hoverProperty, children }) => {
  const [isHovered, onHover] = useState(false);
  return(
  <>
  <button 
  onMouseEnter={() => onHover(true)} 
  onMouseLeave={() => onHover(false)} 
  className={`btn ${cusStyle} ${isHovered ? hoverProperty : ''}`}>{title}
  {children}
  </button>
  </>)
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  cusStyle: PropTypes.string,
  hoverProperty: PropTypes.string,
  children: PropTypes.node,
}

export default Button