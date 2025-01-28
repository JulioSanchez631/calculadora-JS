const acciones = document.querySelector(".acciones");
const resultado = document.querySelector(".resultado");
// Caja de resultado

let acumulador = [];
let mostrador = document.querySelector(".resultado");

let mostraResultado = document.createElement("P");
mostraResultado.classList.add("Resultado_Final");
resultado.appendChild(mostraResultado);
//

let primeros;
let segundos;

let valores = [7,8,9,"*",4,5,6,"-",1,2,3,"+",0,`/`,".","="]; 
let primer = [];
let segundo = [];
let operadores = [];

let creacionFragmentKey = document.createDocumentFragment();

for(let i = 0; i < 16; i++){
    const btn = document.createElement("LABEL");
    btn.classList.add(`btn`,`btn-${i}`);
    const valor = document.createElement("INPUT");
    valor.setAttribute(`type`,`submit`)
    valor.setAttribute(`value`,valores[i])
    btn.appendChild(valor);
    // console.log(btn);
    creacionFragmentKey.appendChild(btn);

    btn.addEventListener("click", () => {
        // if(primer[i] >= 0 && primer[i] <= 9){
        //     primer.push(valores[i]);
        // } else if(!(primer[i] >= 0 && primer[i] <=0)){
        //     operadores.push(valores[i]);
        //     if((operadores.length >= 1)){
        //         segundo.push(valores[i]);
        //     }
        // }

        if(operadores.length == 0 && valor.value >= 0 && valor.value <= 9 || valor.value == "."){
            primer.push(valor.value);
            primeros = primer.join("");
            mostrador.innerHTML = primeros;

        }
        if(valor.value == "*" || valor.value == "-" || valor.value == "+" || valor.value == "/"){
            if(operadores.length == 0){
                operadores.push(valor.value);
            }
            mostrador.innerHTML = operadores;
        }
        if(operadores.length != 0 && valor.value >= 0 && valor.value <= 9){
            segundo.push(valor.value);
            segundos = segundo.join("");
            mostrador.innerHTML = segundos;
        }

        if(valor.value == "="){
            let resultado = eval(`${parseInt(primeros)} ${operadores} ${parseInt(segundos)}`);
            console.log(resultado);
            if(resultado == Infinity){
                mostrador.innerHTML = `No se puede dividir entre 0`;
            } else{
                mostrador.innerHTML = resultado;
            }

            primer = [];
            segundo = [];
            operaciones = [];
        }

    })
}

acciones.appendChild(creacionFragmentKey);
