import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import './App.css'
import axios from 'axios'
import Nav from './components/Nav'

function App() {

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api/users");
    console.log(response.data.users)
  }

  useEffect(() => {
    fetchAPI()
  }, []);

  return (
    <div className='container'>
      <Nav/>
      <HomePage/>
    </div>
  )
}

export default App
