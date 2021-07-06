import {useEffect, useState} from 'react';
import GlobalStyle from '../../globalStyle';
import Header from '../Header/Header';
import FetchUSDData from "../../Functions/API/FetchUSDdata";
import { formatDate } from '../../Functions/Utils/FormatData';
import DolarForm from '../DolarData/DolarForm';
import PaymentMethod from '../PaymentMethod/PaymentMethod';

function App() {
  const [day, setDay] = useState("")
  const [hour, setHour] =  useState("")
  const [dolarAmount, setDolarAmount] = useState("");
  const [percentage, setPercentage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(1);
useEffect(() => {
  FetchUSDData().then( (apiData) => {
    setHour(apiData.ask)
    setDay(formatDate(apiData.create_date).day)
    setHour(formatDate(apiData.create_date).hour)
  });
}, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Header day={day} hour={hour}/> 
      <DolarForm dolarAmount={dolarAmount} dolarAmountHandler={setDolarAmount} percentage={percentage} percentageHandler={setPercentage}/>
      <PaymentMethod paymentMethod={paymentMethod} paymentMethodHandler={setPaymentMethod}/>
    </div>
  );
}

export default App;
