import { useRef } from "react"


export const Search = () => {
    const inputRef = useRef()

    const getContries = async (name)=> {
        let response = await fetch("https://restcountries.com/v3.1/name/"+name)
        let data = await response.json()
        console.log(data)
    }

    return <>
        <h3>Buscar pais</h3>
        <input onChange={() => { getContries(inputRef.current.value) }} ref={inputRef} type="text" placeholder="Ingrese el nombre del pais" />
    </>
}