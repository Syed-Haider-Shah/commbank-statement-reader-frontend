import Button from '../Button';
import Logo from '../Logo';

const Nav = () => {
  return(
  <>
  <div className='nav'>
    <Logo image='/Logo3.png' cusStyle='logo2'/>
    <Button title='Home' cusStyle={`nav-btn`}/>
    <Button title='About' cusStyle='nav-btn'/>
  </div>
  </>
  )
}

export default Nav