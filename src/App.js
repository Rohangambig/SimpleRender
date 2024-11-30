import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';  
import './App.css'
import Login from './login/Index';
import Home from './Home/Index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
