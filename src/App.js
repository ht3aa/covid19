import './App.css';
import NavBar from './pages/navbar/NavBar';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vaccine from './pages/vaccien/Vaccien';
import Totals from './pages/totals/Totals';
import AboutUs from './pages/aboutUs/AboutUs';

function App() {

  return (
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/vaccien" element={<Vaccine />}/>
        <Route path="/totals" element={<Totals />}/>
        <Route path="/aboutUs" element={<AboutUs />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
