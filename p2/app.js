// get tabs

/*function openPage(pageName) {
  var i;
  var x = document.getElementsByClassName("page");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}*/

// form variants
// pizzas

let hawaiana = document.getElementById("hawaiana");
let salami = document.getElementById("salami");
let champinones = document.getElementById("champinones");
let napolitana = document.getElementById("napolitana");
let inglesa = document.getElementById("inglesa");

// appetizers

let deditos = document.getElementById("deditos");
let nudosAjo = document.getElementById("nudosAjo");
let arepa = document.getElementById("arepa");
let tocino = document.getElementById("tocino");
let mondongo = document.getElementById("mondongo");

// drinks

let agua = document.getElementById("agua");
let kelp = document.getElementById("kelp");
let uranio = document.getElementById("uranio");
let cocaCola = document.getElementById("cocaCola");
let aguapanela = document.getElementById("aguapanela");

// button variants
//pizza

let btnHawaiana = document.getElementById("btnHawaiana");
let btnSalami = document.getElementById("btnSalami");
let btnChampinones = document.getElementById("btnChampinones");
let btnNapolitana = document.getElementById("btnNapolitana");
let btnInglesa = document.getElementById("btnInglesa");

//appetizers

let btnDeditos = document.getElementById("btnDeditos");
let btnNudosAjo = document.getElementById("btnNudosAjo");
let btnArepa = document.getElementById("btnArepa");
let btnTocino = document.getElementById("btnTocino");
let btnMondongo = document.getElementById("btnMondongo");

//drinks

let btnAgua = document.getElementById("btnAgua");
let btnKelp = document.getElementById("btnKelp");
let btnUranio = document.getElementById("btnUranio");
let btnCocaCola = document.getElementById("btnCocaCola");
let btnAguapanela = document.getElementById("btnAguapanela");

const storedData = window.localStorage;
let btnSelected = "";

btnAgua.addEventListener("click", () => {
  BringData();
});

function BringData() {
  let keys = Object.keys(storedData);
  console.log(keys);
}
