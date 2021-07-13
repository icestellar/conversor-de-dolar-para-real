//Packages
import { useEffect, useState } from 'react';

//Style
import GlobalStyle from '../GlobalStyle';

//Functions
import FetchDolarData from "../../Functions/API/fetchDolarData.ts";
import { FormatDate } from '../../Functions/Utils/FormatDate.ts';

//Components
import Error from '../Error';
import Main from '../Main';


function App() {
  const [day, setDay] = useState("")
  const [hour, setHour] = useState("")
  const [dollarCurrentValue, setdollarCurrentValue] = useState(0)
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    FetchUSDData().then((apiData) => {
      if(apiData.ask && apiData.create_date){
        setdollarCurrentValue(apiData.ask || 0)
        setDay(FormatDate(apiData.create_date).day)
        setHour(FormatDate(apiData.create_date).hour)
      }
      else{
        sethasError(true);
      }
    });
  }, []);
  
  return (
    <div className="App">
      
      <GlobalStyle />
      <div>{(hasError)? <Error /> : <Main day={day} hour={hour} dayHandler={setDay} hourHandler={setHour} dollarCurrentValue={dollarCurrentValue}/>}</div>
      </div>
  );
}

export default App;
