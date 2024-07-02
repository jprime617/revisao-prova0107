import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'
import PaginaCEP from './screens/PaginaCEP'
import BuscarCachorro from './components/BuscarCachorro'


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/buscar-cep" element={<PaginaCEP/>}/>
        <Route path="/buscar-cachorro" element={<BuscarCachorro/>}/>
      </Routes>
    </Router>
  )
}

export default App
