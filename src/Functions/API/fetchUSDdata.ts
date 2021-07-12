import axios from "axios";
const FetchUSDdata = async () => {
      try {
        const result = await axios('https://economia.awesomeapi.com.br/json/last/USD-BRL')
        return result.data.USDBRL
    } catch (err) {
          return err;
      }
}

export default FetchUSDdata