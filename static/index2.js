/*
    Prendi in input 2 numeri dall'utente

    stampa in console la divisione fra questi due numeri

*/

/*
let primoNumero = prompt("Dammi il primo numero")
let secondoNumero = prompt("Dammi secondo numero")


console.log (parseInt (primoNumero) )
console.log (parseInt (secondoNumero)) 

primoNumero = parseInt(primoNumero)
secondoNumero = parseInt(secondoNumero)

let risultato = primoNumero + secondoNumero


if (isNaN (primoNumero) || isNaN (secondoNumero)){

console.log("i numeri non sono validi, riprova")

} else{ 


console.log("il risultato è " + risultato)
}

*/

/*
    1. usare querySelector per accedere al button
    2. aggiungere al button un event listener (con addEventListener)
    3. specificare che al click del button faccio una serie di cose:
        3a: prendo con querySelector il primo campo del form
        3b: memorizzo in una variabile l'attributo value del primo campo del form (cioè il valore inserito dall'utente)
        3c: prendo con querySelector il secondo campo del form
        3d: memorizzo in una variabile l'attributo value del secondo campo del form (cioè il valore inserito dall'utente)
        3e: converto ad intero con parseInt i due valori
        3f: faccio i controlli con isNaN e in caso abbiamo 2 numeri stampo in console la somma


*/
/* 1. Usare querySelector per accedere al button
const button = document.querySelector('button');

// 2. Aggiungere al button un event listener (con addEventListener)
button.addEventListener('click', function())
{
  // 3a. Prendo con querySelector il primo campo del form
  const firstInput = document.querySelector('#firstInput');

  // 3b. Memorizzo in una variabile l'attributo value del primo campo del form
  const firstValue = firstInput.value;

  // 3c. Prendo con querySelector il secondo campo del form
  const secondInput = document.querySelector('#secondInput');

  // 3d. Memorizzo in una variabile l'attributo value del secondo campo del form
  const secondValue = secondInput.value;

  // 3e. Converto ad intero con parseInt i due valori
  const firstNumber = parseInt(firstValue);
  const secondNumber = parseInt(secondValue);

  // 3f. Faccio i controlli con isNaN e in caso abbiamo 2 numeri stampo in console la somma
  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    console.log('La somma è: ' + (firstNumber + secondNumber));
  } else {
    console.log('Inserisci solo numeri validi.');
  }
};
*/

const button = document.querySelector('#button');

button.addEventListener('click', function() {
 
    const firstInput = document.querySelector('#firstInput');
 
    if (firstInput) {
 
        const firstValue = firstInput.value;
 
        const secondInput = document.querySelector('#secondInput');
 
        if (secondInput) {
      const secondValue = secondInput.value;
      const firstNumber = parseInt(firstValue, 10);
      const secondNumber = parseInt(secondValue, 10);

      if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        console.log('La somma è: ' + (firstNumber + secondNumber));
      } else {
        console.log('Inserisci solo numeri validi.');
 
    }
 
} else {
      console.log('Il secondo campo non esiste.');
    }
  } else {

    console.log('Il primo campo non esiste.');

}
});




