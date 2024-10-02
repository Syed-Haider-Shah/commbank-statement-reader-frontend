import Button from '../Button'
import DateSelector from '../DateSelector'
import '../index.css'
import Logo from '../Logo'
import SearchBar from '../SearchBar'

const SearchCard = () => {
  return(
    <>
    <div className='card'>
      <Logo/>
      <SearchBar/>
      <DateSelector/>
      <Button/>
    </div>
    </>
  )
}

export default SearchCard