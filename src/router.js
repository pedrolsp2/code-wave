import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Index from './Pages/Index/';
import Curso from './Pages/Curso/';

function RoutesApp(){
    return(
    <BrowserRouter> 
    <Header/>
        <Routes>
            <Route path="/" element={ <Index/> }/> 
            <Route path="/curso/:id" element={ <Curso/> }/> 
        </Routes>
    </BrowserRouter>
);
}

export default RoutesApp;