import { Check } from 'lucide-react'

const TextBox = () => {
  return(
  <div className='textbox'>
    <div className='text1'>Welcome</div>
    <div className= 'form'>
      <div className='text2'>Uploaded Successfully</div>
      <div className='tickmark'><Check color={'white'} size={12}/></div>
    </div>
  </div>
  )
}

export default TextBox