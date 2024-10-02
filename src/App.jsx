import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import './App.css'
import axios from 'axios'

function App() {

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api/users");
    console.log(response.data.users)
  }

  useEffect(() => {
    fetchAPI()
  }, []);

  return (
    <>
      <div><HomePage/></div>
    </>
  )
}

export default App
