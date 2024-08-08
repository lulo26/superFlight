// declare selectors, inputs and buttons//
let FlightSelect = document.querySelector("#FlightSelect");

let ChairSelect = document.querySelector("#ChairSelect");

let weightLuggage = document.getElementById("weightLuggage").value;
let BtnResult = document.getElementById("BtnResult");

// declare calc variants //
let priceCountry;
let priceChair;
let priceLuggage = 0;
let extrakg;
let countrySelect;
let total;

function selectCountry() {
  if (FlightSelect.value == "1") {
    priceCountry = 520000;
    countrySelect = "Alemania";
  }
  if (FlightSelect.value == "2") {
    priceCountry = 985000;
    countrySelect = "Estados Unidos";
  }
  if (FlightSelect.value == "3") {
    priceCountry = 62000;
    countrySelect = "Nigeria";
  }
  if (FlightSelect.value == "4") {
    priceCountry = 785000;
    countrySelect = "Paris";
  }
}

function selectChair() {
  if (ChairSelect.value == "5") {
    priceChair = 0;
  }
  if (ChairSelect.value == "6") {
    priceChair = 20000;
  }
  if (ChairSelect.value == "7") {
    priceChair = 40000;
  }
}

BtnResult.addEventListener("click", () => {
  let cantPas = document.getElementById("cantPas").value;
  cantPas = parseInt(cantPas);
  if (weightLuggage == 51) {
    priceLuggage = 15000;
  }

  if (weightLuggage > 51) {
    extrakg = weightLuggage - 50;
    priceLuggage = 15000 * extrakg;
  }

  selectChair();
  selectCountry();
  total = priceCountry * cantPas + priceLuggage + priceChair;
  result.innerHTML = `<p> lugar seleccionado: ${countrySelect} <br /> total a pagar: ${total} </p>`;
});
