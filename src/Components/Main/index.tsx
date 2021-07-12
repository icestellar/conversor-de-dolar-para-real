//Packages
import { useEffect, useState } from 'react';

//Style
import GlobalStyle from '../GlobalStyle';

//Components
import Header from '../Header';
import DollarForm from '../DollarForm';
import Result from '../Result';

//Functions
import { CheckIfInputIsValid } from '../../Functions/Utils/TextValidation';

interface iProps{
  day: any, 
  hour: any,
  dollarCurrentValue: Number, 
  dayHandler: Function, 
  hourHandler: Function
}

const Main = (props: iProps) => {

  const [dollarAmount, setdollarAmount] = useState("");
  const [percentage, setPercentage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("dinheiro");
  const [convertClicked, setConvertClicked] = useState(true);
  const [enableButton, setEnableButton] = useState(true);

  useEffect(() => {
    setEnableButton(!CheckIfInputIsValid(dollarAmount, percentage))
  }, [dollarAmount, percentage]);

  return (
    <div className="">
      
      <GlobalStyle />
      <Header currentValue={props.dollarCurrentValue} day={props.day} hour={props.hour} />
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
          <Result dollarCurrentValue={props.dollarCurrentValue}
            dollarAmount={dollarAmount}
            percentage={percentage}
            paymentMethod={paymentMethod}
            backClicked={!convertClicked}
            backClickedHandler={setConvertClicked} />}
      </div>
    </div>
  );
}

export default Main;