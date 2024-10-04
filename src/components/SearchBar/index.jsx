import '../index.css'
import { useState } from 'react'
import { ArrowUp } from 'lucide-react'
import Button from '../Button';

const SearchBar = () => {

  const [searchKey, setKey] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchKey.trim()) {
      console.log('Saving Search Term:', searchKey)
      setKey('')
    }
  }

  return(
    <>
    <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={searchKey}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Search Term..."
          className="searchbar"
        />
        <Button title='' cusStyle='search-btn'>
          <ArrowUp color={'white'}/>
          </Button>
      </form>
    </>
  )
}

export default SearchBar