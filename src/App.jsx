import { Routes, Route } from 'react-router-dom';
import Layout from '../Layouts/Layout';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Youtube from './pages/Youtube/Youtube';
import Contato from './pages/Contato/Contato';

function App() {
  
  return (
    <>
        <Routes>

            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='Sobre' element={<Sobre/>}/>
                <Route path='Youtube' element={<Youtube/>} />
                <Route path='Contato' element={<Contato/>} />
            </Route>

        </Routes>
    </>
  )
}

export default App
