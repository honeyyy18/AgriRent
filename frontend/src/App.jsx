import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEquipment from './pages/AddEquipment';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
       <Route path='/' element= {<Home/>} />
        <Route path="/add" element={<AddEquipment />} />
      </Routes>
    </Router>
  );
}

export default App;
