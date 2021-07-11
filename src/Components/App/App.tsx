import { useEffect, useState } from 'react';
import Header from '../Header';
import FetchUSDData from "../../Functions/API/FetchUSDdata";
import { FormatDate } from '../../Functions/Utils/FormatDate';
import DollarForm from '../DollarForm';
import Result from '../Result';
import { CheckIfInputIsValid } from '../../Functions/Utils/TextValidation';
import GlobalStyle from '../GlobalStyle';
function App() {
  const [day, setDay] = useState("")
  const [hour, setHour] = useState("")
  const [dollarCurrentValue, setdollarCurrentValue] = useState(0)
  const [dollarAmount, setdollarAmount] = useState("");
  const [percentage, setPercentage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("dinheiro");
  const [convertClicked, setConvertClicked] = useState(true);
  const [enableButton, setEnableButton] = useState(true);

  useEffect(() => {
    FetchUSDData().then((apiData) => {
      setdollarCurrentValue(apiData.ask || 0)
      setDay(FormatDate(apiData.create_date).day)
      setHour(FormatDate(apiData.create_date).hour)
    });
  }, []);

  useEffect(() => {
    setEnableButton(!CheckIfInputIsValid(dollarAmount, percentage))
  }, [dollarAmount, percentage]);

  return (
    <div className="App">
      <GlobalStyle />
      <Header day={day} hour={hour} />
      <div>
        {(convertClicked) ? <DollarForm dollarAmount={dollarAmount}
          dollarAmountHandler={setdollarAmount}
          percentage={percentage}
          percentageHandler={setPercentage}
          paymentMethod={paymentMethod}
          paymentMethodHandler={setPaymentMethod}
          convertClicked={convertClicked}
          convertClickedHandler={setConvertClicked}
          enabledButton={enableButton} />
          :
          <Result dollarCurrentValue={dollarCurrentValue}
            dollarAmount={dollarAmount}
            percentage={percentage}
            paymentMethod={paymentMethod}
            backClicked={!convertClicked}
            backClickedHandler={setConvertClicked} />}
      </div>
    </div>
  );
}

export default App;