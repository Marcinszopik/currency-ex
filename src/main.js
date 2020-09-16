import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";


$(document).ready(function() {
  $('#button').click(function() {
    const from = $('#from').val();
    const to = $('#to').val();
    const amount = $('#amount').val();
    console.log(from);
    $(".show").text($`${from} ${to} ${amount}`);

    // let request = new XMLHttpRequest();
    // const url = `https://api.exchangeratesapi.io/latest?base=${to}`;

    // request.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     const response = JSON.parse(this.responseText);
    //     getElements(response);
    //   }
    // };

    // request.open("GET", url, true);
    // request.send();
    // const getElements = function (response) {
    //   $("#show").text(
    //     `the ${to} is ${amount} ${response.rates[from]}`
    //   );
    // };
  });
});