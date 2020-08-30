import React, { useEffect, useState } from "react";
import "./App.css";
import "./navBar.css";
import "./footer.css";
import "./maindata.css";
import axios from 'axios';
import NavBar from './navBar';
import ExampleCustomInput from "./navBar";
import MainData from "./MainData";
import Footer from './Footer';


function App() {

  const [NasaData,setNasaData] = useState([]);
  const apiKey = "gKe2qjhSWfEe7newtcPtxogJEN4ui03Aw8t6TqSp";
  let podDate = new Date();
  podDate.setDate(new Date().getDate() - 1);
  const [date, setDate] = useState(podDate.toISOString().split('T')[0]);


  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${ apiKey }&date=${ date }`) // &date=${ ExampleCustomInput }
      .then(res => {
        console.log(res);
        setNasaData(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  }, [date]);

  return (
    <div className="App">
    <div>
      <NavBar date={date} setDate={setDate} />
    </div>
      <MainData data={ NasaData } />
      <Footer />
    </div>
  );
}

export default App
