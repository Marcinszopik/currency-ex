import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { CurrencyService } from './../src/currency-service.js';


$(document).ready(function() {
  $('#button').click(function() {
    const from = $('#from').val();
    const to = $('#to').val();
    const amount = $('#amount').val();
    console.log(from);
    
    (async () => {
      let currencyService = new CurrencyService();
      const response = await currencyService.getCurrencyByCountry(from);
      getElements(response);
    })();


    const getElements = function (response) {
      $("#show").text(
        `the ${from} is ${amount} multiply ${response.rates[to]} ${to}`
      );
    };
  });
});