import React from 'react';
import Home from "./pages/Home.jsx";
import Header from './components/Header.jsx';
import Contato from './pages/Contact.jsx'; 
import {BrowserRouter, Link} from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contato' element={<Contato/>}/>
      <Route path='*'/>
      </Routes>

    </BrowserRouter>
  );
}
