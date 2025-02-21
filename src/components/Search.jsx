import { useEffect, useRef, useState } from "react"


export const Search = ({setCountries, setError}) => {
    const [band,setBand] = useState(false)
    const inputRef = useRef()

    const getContries = async (name)=> {
        let response = await fetch("https://restcountries.com/v3.1/name/"+name)
        let data = await response.json()
        console.log(data)
        if (data.status == 404) {
            setError(true)
            return
        }
        setError(false)
        setCountries(data)
    }

    useEffect(()=>{
        if(band){
            if (inputRef.current.value !== "") {
            getContries(inputRef.current.value)
        }
        }

        return setBand(false)
    },[band])

    return <>
        <h3>Buscar pais</h3>
        <input ref={inputRef} onChange={()=>{ setBand(true) }} type="text" placeholder="Ingrese el nombre del pais" />
    </>
}