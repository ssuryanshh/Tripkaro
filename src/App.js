// src/App.js
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import LandingScreen from './Screens/LandingScreen/LandingScreen';
import AdventureScreen from './Screens/AdventureScreen/AdventureScreen';
import ReservationScreen from './Screens/ReservationScreen/ReservationScreen';
import DetailsScreen from './Screens/DetailsScreen/DetailsScreen';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
//import BoxContainer from './components/BoxContainer/BoxContainer';
// import Cards from './components/Practice/Cards/Cards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<LandingScreen/>}/>
          <Route path="/adventure/:id" element={<AdventureScreen/>}/>
          <Route path="/reservation" element={<ReservationScreen/>}/>
          <Route path="/details/:id" element={<DetailsScreen/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
