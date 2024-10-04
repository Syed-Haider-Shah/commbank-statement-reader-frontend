import Button from '../Button'
import DateSelector from '../DateSelector'
import '../index.css'
import Logo from '../Logo'
import SearchBar from '../SearchBar'
import TextBox from '../TextBox'

const SearchCard = () => {
  return(
    <>
    <div className='card'>
      <Logo image='/Logo.png' cusStyle='logo'/>
      <TextBox/>
      <div className='last-section'>
        <SearchBar/>
        <DateSelector/>
        <Button cusStyle={`upload-btn`} title='Upload Again'/>
      </div>
    </div>
    </>
  )
}

export default SearchCard