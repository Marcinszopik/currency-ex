export class CurrencyService {
  async getCurrencyByCountry(from) {
      try {
          let response = await fetch(`https://api.exchangeratesapi.io/latest?base=${from}`);
          let jsonifiedResponse;
          if (response.ok && response.status == 200) {
              jsonifiedResponse = await response.json();
          } else {
              jsonifiedResponse = false;
          }
          return jsonifiedResponse;
      } catch {
          return false;
      }
    }
}

