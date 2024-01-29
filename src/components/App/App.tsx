import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Routes, Route } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';
import Details from '../Details/Details';


function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/detail' element={<Details />} />
          <Route path='*' element={<div><h1>404 Page Not Found</h1></div>} />
        </Routes>
      </div>
    </>

  );
}

export default App;
