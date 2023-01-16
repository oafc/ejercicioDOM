const h1     = document.querySelector('h1')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn    = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');
const form   = document.querySelector('#form');

form.addEventListener('submit', sumaInput );


function sumaInput(event){
    event.preventDefault();
    const suma = Number(input1.value) + Number(input2.value);
    resultado.innerHTML = `El resultado de tu suma es ${suma}`;
};