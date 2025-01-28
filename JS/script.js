const accionesContenedor = document.querySelector(".acciones");

const armadorAccion = (valor) => {
  valor = `<span>${valor} </span>`;
  return valor;
}

let valoresTotales = [7,8,9,`*`,4,5,6,`-`,1,2,3,`+`,0,`.`,`=`,`%`]

for(let i = 0; i < 16; i++){
  let accion = document.createElement("LABEL");
  accionesContenedor.appendChild(accion);
  accion.classList.add("btn-calculadora",`item${i}`)
  let valor = document.createElement("SPAN");
  accion.appendChild(valor);
  let identificador = document.querySelector(`.item${i}`);
  let span = identificador.querySelector("span");
  span.textContent = valoresTotales[i];
  let uno = document.querySelector(`.item${i}`);
  let dos = document.querySelector(`.item${i}`);
  let operacion = document.querySelector(`.item${i}`);
  console.log(uno);
  uno.addEventListener("click",() => {
    var1.push(valoresTotales[i]);
    if(valoresTotales[i] == `*` || valoresTotales[i] == `-` || valoresTotales[i] == `+` || valoresTotales[i] == `=` || valoresTotales[i] == `%`){
      operad.push(valoresTotales[i]);
      if(operad.length >= 1){
        var2.push(valoresTotales[i])
      }
    }
  })


}

let var1 = [];
let var2 = [];
let operad = [];
let var1junto = var1.join("");
let var2junto = var2.join("");
operad = operad.join("");
// eval simula una cadena de texto, como si fuera codigo, JS.
let resultado = eval(`${parseInt(var1junto)} ${operad} ${parseInt(var2junto)}`);
console.log(resultado);

// Botones

const btn_1 = document.querySelector(".item0");



