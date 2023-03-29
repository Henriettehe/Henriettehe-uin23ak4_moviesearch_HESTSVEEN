import './sass/main.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OneMovie from './pages/OneMovie';

//Kommentar: deltatt på studentøvingstimer, snakket og arbeidet høyt med tidligere gruppe og studentassistenter. 


function App() { 
  return (
    <>
    <Router>
      <Routes >
          <Route index element={<Home />} />
          <Route path='/:id' element={<OneMovie />} />
      </Routes>
    </Router>
    </>

  );
}

export default App;