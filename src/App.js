import React from 'react';
import './App.css';
import Form from './components/body/Form';
import { Routes, Route } from "react-router-dom"
import Notfind from './components/body/Notfind';
import Otp from './components/body/Otp';
import Atm from './components/body/Atm';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Form />} />
        <Route exact path='/otp' element={<Otp />} />
        <Route exact path='/pinverify' element={<Atm />} />

        <Route exact path='*' element={<Notfind />} />
      </Routes>
    </>
  );
}

export default App;
