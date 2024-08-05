import React from 'react';
import ReactDOM from 'react-dom/client';
import {Footer ,Navbar } from './components/layout';
import { Home } from './components/home';
import { Product} from './components/product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

//we use the following command to enable routing in react -> i react-router-dom
function App()
{
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route />
        
      </Routes>
      <></>
      <Footer/>
    </BrowserRouter>

    </>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


