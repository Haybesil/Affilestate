import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Property from './components/pages/property/Property'
import Details from './components/pages/details/Details';
import Contact from './components/pages/contact/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
           <Route path='/' exact element = {<Home/>}/>
           <Route path='/about' element = {<About/>}/>
           <Route path='/property' element = {<Property/>}/>
           <Route path='/detail' element = {<Details/>}/>
           <Route path='/contact' element = {<Contact/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

