import {useEffect, useState} from 'react';
import GlobalStyle from '../../globalStyle';
import Header from '../Header/Header';
import FetchUSDData from "../../Functions/API/FetchUSDdata";
import { formatDate } from '../../Functions/Utils/FormatData';
import DollarForm from '../DollarForm/DollarForm';
import Result from '../Result/Result';

function App() {
  const [day, setDay] = useState("")
  const [hour, setHour] =  useState("")
  const [dollarCurrentValue, setdollarCurrentValue] = useState(0)
  const [dollarAmount, setdollarAmount] = useState("");
  const [percentage, setPercentage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("dinheiro");
  const [convertClicked, setConvertClicked] = useState(true);

useEffect(() => {
  FetchUSDData().then( (apiData) => {
    setdollarCurrentValue(apiData.ask)
    setDay(formatDate(apiData.create_date).day)
    setHour(formatDate(apiData.create_date).hour)
  });
}, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Header day={day} hour={hour}/>
      <div>
        {(convertClicked) ? <DollarForm dollarAmount={dollarAmount} 
                  dollarAmountHandler={setdollarAmount} 
                  percentage={percentage} 
                  percentageHandler={setPercentage} 
                  paymentMethod={paymentMethod} 
                  paymentMethodHandler={setPaymentMethod} 
                  convertClicked={convertClicked}
                  convertClickedHandler={setConvertClicked}/> : 

                  <Result dollarCurrentValue={dollarCurrentValue} 
                          dollarAmount={dollarAmount} 
                          percentage={percentage}
                          paymentMethod={paymentMethod}
                          backClicked={!convertClicked} backClickedHandler={setConvertClicked}/>}
      </div>
    </div>
  );
}

export default App;