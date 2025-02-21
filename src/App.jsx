import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'
import { ShowContries } from './components/ShowContries'

function App() {
  const[contries,setCountries] = useState([])
  const [error,setError] = useState(false)

  return (
    <>
      <h1>Buscador de paises</h1>
      <Search setCountries={setCountries} setError={setError} />
      <ShowContries contries={contries} error={error} />
    </>
  )
}

export default App
