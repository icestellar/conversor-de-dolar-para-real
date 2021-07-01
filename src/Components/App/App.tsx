import React, {useEffect, useState} from 'react';
import GlobalStyle from '../../globalStyle';
import Header from '../Header/Header';
import FetchUSDData from "../../Functions/API/FetchUSDdata";
import { formatDate } from '../../Functions/Utils/FormatData';
function App() {
  const [day, setDay] = useState("")
  const [hour, setHour] =  useState("")
useEffect(() => {
  FetchUSDData().then( (apiData) => {
    setHour(apiData.ask)
    setDay(formatDate(apiData.create_date).day)
    setHour(formatDate(apiData.create_date).hour)
  });
}, [])

  return (
    <div className="App">
      <GlobalStyle />
      <Header day={day} hour={hour}/> 
    </div>
  );
}

export default App;
