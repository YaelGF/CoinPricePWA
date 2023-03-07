const container = document.querySelector(".container");
const coins = [
  {
    name: "50 aniversario de la aplicación del Plan Marina",
    price:[{min:77},{max:5000}],
    image: "monedasde20/C_mon20pesos_PlanMarina.png"
  },
  {
    name: "Quincuagésimo aniversario de la aplicación del Plan DN-III-E",
    price:[{min:89},{max:3000}],
    image: "monedasde20/C_mon_20_pesos_PlanDNIIIE.png"
  },
  {
    name: "Centenario de la promulgación de la Constitución Política de los Estados Unidos Mexicanos del 5 de febrero de 1917",
    price:[{min:350},{max:19000}],
    image: "monedasde20/20_Const1917_rev_pagMon20.png"
  },
  {
    name: "Bicentenario luctuoso del generalísimo José María Morelos y Pavón",
    price:[{min:5000},{max:30000}],
    image: "monedasde20/Morelos_20_anvTransp_peq.png"
  },
  {
    name: "Centenario de la Fuerza Aérea Mexicana",
    price:[{min:700},{max:10000}],
    image: "monedasde20/Fuerza_Aerea_20_revTransp_peq.png"
  },
  {
    name: "Centenario de la toma de Zacatecas",
    price:[{min:3000},{max:20000}],
    image: "monedasde20/C_20pesosZacatecas_142.png"
  },{
    name: "Centenario de la gesta heroica de Veracruz",
    price:[{min:300},{max:14500}],
    image: "monedasde20/C_20pesosVeracruz_144.png"
  },
  {
    name: "150 aniversario del natalicio y 100 aniversario luctuoso de Belisario Domínguez",
    price:[{min:20},{max:5000}],
    image: "monedasde20/C_20pesosBelisario_144.png"
  },
  {
    name: "Centenario del Ejército Mexicano",
    price:[{min:300},{max:3000}],
    image: "monedasde20/C_20pesosEjercito_144.png"
  },{
    name: "Vigésimo aniversario de la entrega del Premio Nobel de Literatura a Octavio Paz",
    price:[{min:200},{max:3500}],
    image: "monedasde20/C_20pesosPazNobel_144.png"
  },
  {
    name: "Octavio Paz, cambio de milenio",
    price:[{min:350},{max:3500}],
    image: "monedasde20/C_20pesosPazCambioMilenio_144.png"
  }
];
const showCoins = () => {
  let output = "";
  coins.forEach(
    ({ name, image,price }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <h4 class="card--content">Minimo: $<b>${price[0].min }</b></h4>
                <h4 class="card--content">Maximo: $<b>${price[1].max}</b></h4>
                <p>
                  <a class="card--link" href="">Buy</a><a class="card--link" href="">Sell</a>
                </p>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoins);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("serviceWorker.js", { scope: "/" })
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

// https://www.banxico.org.mx/billetes-y-monedas/monedas-20-pesos-conmemorativ.html#collapse1