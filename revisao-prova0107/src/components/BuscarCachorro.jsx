import { useState } from "react"

export default function BuscarCachorro() {
    const [dog, setDog] = useState(null)
    const [id, setid] = useState(0)

    const fetchData = async () => {
        try{
            const response = await fetch(`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1&#39`)
            const data = await response.json()
            setDog(data[0].url)
        } catch(error){
            console.error(error)
        }
    }




    return(
        <div className="content-B">
            <button className="botaoC" onClick={fetchData}>Buscar Cachorro</button>
            <img className="imgDog" src={dog}/>
            
        </div>
    )
}