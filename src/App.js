import NavBar from './pages/navbar/NavBar';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vaccine from './pages/vaccien/Vaccien';
import Totals from './pages/totals/Totals';
import AboutUs from './pages/aboutUs/AboutUs';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setAllValues } from './redux/features/cities/cities';

function App() {

  const [statisticsData, setStatiticsData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getAllData() {
      
      const { data: citiesData } = await axios.get("https://calm-reef-09931.herokuapp.com/http://64.225.100.142:3000/getAllHealthCenters");
      dispatch(setAllValues(citiesData));
      
      const { data: statisData} = await axios.get("https://calm-reef-09931.herokuapp.com/http://64.225.100.142:3000/Statistics");
      setStatiticsData(statisData)
      
    }
    getAllData();
  }, [dispatch])
  return (
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/vaccien" element={<Vaccine />}/>
        <Route path="/totals" element={<Totals statisticsData={statisticsData} />}/>
        <Route path="/aboutUs" element={<AboutUs />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
