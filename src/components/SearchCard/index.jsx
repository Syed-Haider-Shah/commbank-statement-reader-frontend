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
      <Logo/>
      <TextBox/>
      <SearchBar/>
      <DateSelector/>
      <Button cusStyle={'upload'}/>
    </div>
    </>
  )
}

export default SearchCard