import './App.css';
import NavBar from './pages/navbar/NavBar';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vaccine from './pages/vaccien/Vaccien';

function App() {

  return (
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path="/vaccien" element={<Vaccine />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
