import { useEffect, useRef, useState } from "react"


export const Search = ({setCountries}) => {
    const [band,setBand] = useState(false)
    const inputRef = useRef()

    const getContries = async (name)=> {
        let response = await fetch("https://restcountries.com/v3.1/name/"+name)
        let data = await response.json()
        setCountries(data)
    }

    useEffect(()=>{
        if(band){
            getContries(inputRef.current.value)
            console.log(inputRef.current.value)
        }

        return setBand(false)
    },[band])

    return <>
        <h3>Buscar pais</h3>
        <input ref={inputRef} onChange={()=>{ setBand(true) }} type="text" placeholder="Ingrese el nombre del pais" />
    </>
}