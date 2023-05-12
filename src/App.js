// src/App.js
import './App.css';
import countries from './countries.json';
import { useState, useEffect } from 'react';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import axios from 'axios';

function App() {
  const [countriesData, setCountriesData] = useState([]);

  // useEffect(()=> {
  //   setCountriesData(countries)
  // },[])

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => setCountriesData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<CountriesList countries={countriesData} />}
            />
            <Route
              path="/:alpha3Code"
              element={<CountryDetails countries={countriesData} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
