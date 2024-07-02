import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <div>
            <Link to="/buscar-cep">Pesquisar um CEP</Link> <br />
            <Link to="/buscar-cachorro">Pesquisar Cachorro</Link>
        </div>
    )
}