import { useState } from "react"

export default function BuscarCEP() {
    const [cep, setCep] = useState('') //usar no input
    const [endereco, setEndereco] = useState(null) // usar para pegar o endereço pela api
    const [erro, setErro] = useState(null)

    const fetchData = async () => {
        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`); //crase
            const data = await response.json()
            setEndereco(data)
            setErro(null)
        } catch (error){
            console.error(error)
            setErro(true)
            setEndereco(null)
        }
    }
    return(
        <div className="content">
            <div className="box">
            <h1>Buscar endereço por CEP</h1>
            <input 
                type="number" 
                value={cep}
                placeholder="Digite aqui"
                onChange={(e) => setCep(e.target.value)}
            ></input>

            <button onClick={fetchData}>Buscar</button>
            {erro && (
                <p className="error">CEP Errado</p>
            )}
            

            {endereco && (
                <div className="endereco">
                <p>Rua: {endereco.logradouro}</p>
                <p>Bairro: {endereco.bairro}</p>
                <p>Cidade: {endereco.localidade}</p>
                <p>UF: {endereco.uf}</p>
                <p>Complemento: {endereco.complemento}</p>
                </div>
            )}

            </div>
        </div>
    )
}