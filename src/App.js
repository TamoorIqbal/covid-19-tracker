
import './App.css';
import React, { useState,useEffect } from 'react';
import Header from './Components/Header';
import { Globalstats } from './Components/Globalstats'
import { CountriesStats } from "./Components/CountriesStats"
import  Graphs  from './Components/Graphs'
import {fetchData} from './Components/Api'


function App() {

const [country, setCountry] = useState([]);
const [data, setData] = useState({});


  useEffect(() => {
     const fetchAPI = async () => {
         setData(await fetchData());
     }
     fetchAPI();
      
  }, [])

  const handleChange = async (country) => {
    const fetchedData = await fetchData(country);
    setCountry(country)
    setData(fetchedData)
  }
console.log(data);

  return (<>
    <Header />
    <Globalstats data={data} />
    <CountriesStats handleChange={handleChange} />
    
    <Graphs data={data} country={country} />


  </>);


}

export default App;
