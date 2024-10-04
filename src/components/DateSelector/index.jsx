import '../index.css'
import { ChevronsUpDown } from 'lucide-react';

const DateSelector = () => {
  return(
    <>
    <button className='dateselector'>
      <div className='color'>Select Month...</div>
      <ChevronsUpDown color={'grey'} size={18}/>
    </button>
    </>
  )
}

export default DateSelector