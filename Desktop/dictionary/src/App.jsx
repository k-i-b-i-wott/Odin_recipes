import React from 'react'
 import './App.css'
import { useEffect, useState} from 'react'
const App = () => {
  const [word, setWord] = useState()
  useEffect(() => {
      async function fetchData() {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        console.log(data);
        setWord(data)
      } catch (error) {
        console.error(error);
      }  
    
  }
  fetchData()
  }, [])

  
  return (
    <div >
      <Details />
    </div>
  )
}

export default App

function Details() {
  return(
    <div className="header">
      <div>
        <h1>By <a href="https://github.com/k-i-b-i-wott" target='_blank'>Biwott</a></h1>
      </div>
      <div>
        <h1>Search For any word</h1>
      </div>
      <form action="">
        <input type="text" placeholder='Search' />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}