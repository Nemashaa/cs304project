import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar';
import { SearchResultlist } from './components/SearchResultlist';



function App() {

  const [results, setResults] = useState({});
  

  return (
    <div className='App'><div className='Search-bar-container'>
   <SearchBar setResults = {setResults}/>
     <SearchResultlist results = {results} />

      </div>
    </div>
  )
}

export default App
