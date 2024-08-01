


let numeroSecreto= 0;
let intentos = 0;
let listaNumerosSorteados=[];
let NumeroMaximo= 10;

condicionesIniciales();





function asignarTextoElemento(elemento,texto){
   let elementoHTML= document.querySelector(elemento);
   elementoHTML.innerHTML=texto;
   return;

}
function condicionesIniciales(){
    asignarTextoElemento("h1","juego del numero secreto");
    asignarTextoElemento("p",`ingresa un numero del 1 al ${NumeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;


}

function generarNumeroSecreto() {
   let numeroGenerado= Math.floor(Math.random()*NumeroMaximo)+1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);

   if (listaNumerosSorteados.length==NumeroMaximo){
    asignarTextoElemento('p', `ya se sortearon todos los valores posibles`)

   } else {

   if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();

   } else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;

   }

   }




}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(typeof(numeroSecreto));
    console.log(typeof(numeroDeUsuario));

   if (numeroDeUsuario===numeroSecreto){
     asignarTextoElemento('p',`¡Muy bien, acertaste el numero en ${intentos} ${ (intentos == 1) ?'vez!':'veces!'}`);
     
     document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
    
        } else{
            asignarTextoElemento('p','el numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
   }


    return;

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
   
}

