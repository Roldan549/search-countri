import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'
import { ShowContries } from './components/ShowContries'

function App() {
  const[contries,setCountries] = useState([])

  console.log(contries)

  return (
    <>
      <h1>Buscador de paises</h1>
      <Search setCountries={setCountries} />
      <ShowContries contries={contries} />
    </>
  )
}

export default App
