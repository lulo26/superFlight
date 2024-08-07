// declare selectors, inputs and buttons//
let FlightSelect = document.querySelector("#FlightSelect");
let selection = FlightSelect.options[FlightSelect.selectedIndex].value;

let ChairSelect = document.querySelector("#ChairSelect");
let selection2 = ChairSelect.options[ChairSelect.selectedIndex].value;

let cantPas = document.getElementById("cantPas").value;
cantPas = parseInt(cantPas);
let weightLuggage = document.getElementById("weightLuggage").value;
let BtnResult = document.getElementById("BtnResult");

// declare calc variants //
let priceCountry;
let priceChair;
let priceLuggage;
let extrakg;
let countrySelect;

FlightSelect.addEventListener("click", selectCountry);

function selectCountry() {
  console.log(":3");
  if (selection == "1") {
    priceCountry = 520000;
    countrySelect = "Alemania";
  }
  if (selection == "2") {
    priceCountry = 985000;
    countrySelect = "Estados Unidos";
  }
  if (selection == "3") {
    priceCountry = 62000;
    countrySelect = "Nigeria";
  }
  if (selection == "4") {
    priceCountry = 785000;
    countrySelect = "Paris";
  }
}

ChairSelect.addEventListener("click", selectChair);

function selectChair() {
  if (selection2 == "5") {
    priceChair = 0;
  }
  if (selection2 == "6") {
    priceChair = 20000;
  }
  if (selection2 == "7") {
    priceChair = 40000;
  }
}

if (weightLuggage == 51) {
  priceLuggage = 15000;
}

if (weightLuggage > 51) {
  extrakg = weightLuggage - 50;
  priceLuggage = 15000 * extrakg;
}

BtnResult.addEventListener("click", (e) => {
  selectChair();
  selectCountry();
  let total = priceCountry * cantPas + priceLuggage + priceChair;
  console.log(priceCountry);
  console.log(cantPas);
  console.log(priceLuggage);
  console.log(priceChair);
  console.log(total);
  result.innerHTML = `<p> lugar seleccionado:${countrySelect} <br /> total a pagar: ${total} </p>`;
});
