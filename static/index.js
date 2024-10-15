//iniziamo con il codice js
//prompt è una funzione che chiede un input all'utente 
let firstName = prompt("come ti chiami?")


while(firstName === null){
  firstName = prompt("inserisci un nome corretto")

}

alert( firstName + " benvenuto nel quiz di dragonball!!")

//qui dichiariamo le domande, le risposte corrette e quelle sbagliate 
let correct = 0
let wrong = 0
let domande = 7


//iniziamo con la prima domanda

let primaDomanda = prompt("chi ha ucciso vegeta per la prima volta in dragon ball z?")
while(primaDomanda === null) {

firstName = prompt("riprova")

}

// ora utilizziamo toLowerCase() metodo restituisce il valore della stringa convertito in minuscolo. 

primaDomanda = primaDomanda.toLowerCase()

//ora utilizziamo Il trim()metodo dei Stringvalori rimuove gli spazi vuoti da entrambe le estremità di questa stringa e restituisce una nuova stringa, senza modificare la stringa originale

primaDomanda = primaDomanda.trim()

if(primaDomanda === "freezer"){

   alert("Grande, continua così")
   correct++

} else {
      alert("errato, la risposta esatta è freezer")
wrong++
}

//seconda domanda 

let secondaDomanda = prompt("come si chiama la fusione tra goku e vegeta, nello scontro contro janemba?")
while( secondaDomanda === null) {

firstName = prompt("riprova")

}


// ora utilizziamo toLowerCase() metodo restituisce il valore della stringa convertito in minuscolo.


secondaDomanda = secondaDomanda.toLowerCase()


//ora utilizziamo Il trim()metodo dei Stringvalori rimuove gli spazi vuoti da entrambe le estremità di questa stringa e restituisce una nuova stringa, senza modificare la stringa originale


 secondaDomanda = secondaDomanda.trim()


if( secondaDomanda === "gogeta"){


   alert("Grande, continua così")
correct++

} else {
      alert("errato, la risposta esatta è gogeta ")
wrong++
}

//terza domanda
let terzaDomanda = prompt("come si chiama il figlio di Goku?")
while( terzaDomanda === null) {


firstName = prompt("riprova")


}


// ora utilizziamo toLowerCase() metodo restituisce il valore della stringa convertito in minuscolo.


 terzaDomanda = terzaDomanda.toLowerCase()


//ora utilizziamo Il trim()metodo dei Stringvalori rimuove gli spazi vuoti da entrambe le estremità di questa stringa e restituisce una nuova stringa, senza modificare la stringa originale


terzaDomanda = terzaDomanda.trim()


if( terzaDomanda === "gohan"){


   alert("Grande, continua così")
correct++

} else {
      alert("errato, la risposta esatta è gohan")
wrong++
}


//quarta domanda

let quartaDomanda = prompt("come si chiama il pianeta natale di goku?")
while( quartaDomanda === null) {


firstName = prompt("riprova")


}


// ora utilizziamo toLowerCase() metodo restituisce il valore della stringa convertito in minuscolo.


 quartaDomanda = quartaDomanda.toLowerCase()


//ora utilizziamo Il trim()metodo dei Stringvalori rimuove gli spazi vuoti da entrambe le estremità di questa stringa e restituisce una nuova stringa, senza modificare la stringa originale


 quartaDomanda = quartaDomanda.trim()


if( quartaDomanda === "vegeta") {


   alert("Grande, continua così")
correct++

} else {
      alert("errato, la risposta esatta è vegeta")
wrong++

}


//quinta domanda

let quintaDomanda = prompt("come si chiama la tecnica più utilizzata da goku?")
while( quintaDomanda === null) {


firstName = prompt("riprova")


}


// ora utilizziamo toLowerCase() metodo restituisce il valore della stringa convertito in minuscolo.


 quintaDomanda = quintaDomanda.toLowerCase()


//ora utilizziamo Il trim()metodo dei Stringvalori rimuove gli spazi vuoti da entrambe le estremità di questa stringa e restituisce una nuova stringa, senza modificare la stringa originale


 quintaDomanda = quintaDomanda.trim()


if( quintaDomanda === "onda energetica"){


   alert("Grande, continua così")
correct++

} else {
      alert("errato, la risposta esatta è onda energetica")
wrong++

}

//sesta domanda

let sestaDomanda = prompt("Come si chiama il principe dei Saiyan?")
while( sestaDomanda === null) {


firstName = prompt("riprova")


}


// ora utilizziamo toLowerCase() metodo restituisce il valore della stringa convertito in minuscolo.


 sestaDomanda = sestaDomanda.toLowerCase()


//ora utilizziamo Il trim()metodo dei Stringvalori rimuove gli spazi vuoti da entrambe le estremità di questa stringa e restituisce una nuova stringa, senza modificare la stringa originale


 sestaDomanda = sestaDomanda.trim()


if(sestaDomanda === "vegeta"){


   alert("Grande, continua così")
   correct++


} else {
      alert("errato, la risposta esatta è vegeta ")
      wrong++


}


//settima domanda

let settimaDomanda = prompt("Chi ha sconfitto Cell durante il Cell Game?")
while( settimaDomanda === null) {


firstName = prompt("riprova")


}


// ora utilizziamo toLowerCase() metodo restituisce il valore della stringa convertito in minuscolo.


 settimaDomanda = settimaDomanda.toLowerCase()


//ora utilizziamo Il trim()metodo dei Stringvalori rimuove gli spazi vuoti da entrambe le estremità di questa stringa e restituisce una nuova stringa, senza modificare la stringa originale


settimaDomanda = settimaDomanda.trim()


if( settimaDomanda === "gohan"){


   alert("Grande, continua così")
   correct++


} else {
      alert("errato, la risposta esatta è gohan ")
      wrong++

}
//creiamo una funzione per il calcolo percentuale 
function calcoloPercentuale(percentuale, totale){
      letperc = (percentuale / totale) * 100
      return perc

}

console.log("le risposte esatte sono  " + correct)
console.log("le risposte errate sono  " + wrong)















