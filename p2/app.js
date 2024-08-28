// get tabs

function openPage(pageName) {
  var i;
  var x = document.getElementsByClassName("page");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}

// variants
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
