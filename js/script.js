//costanti
//costo al kilometro 
const kilometers = 0.21;
let pay;

//Chiedere all'utente il numero di kilometri che vuole percorrere 
let travel = prompt("Quanti kilomentri devi percorrere?");
//Chiedere all'utente l'età
let age = prompt("Quanti anni hai?");

//Stampare il biglietto
let fullTicket = kilometers * travel;


    
if (age < 18) {

    //se minore di 18 anni 20% sconto
    pay = fullTicket - (fullTicket * 0.2);

} else if (age > 65) {
    //se maggiore di 65 anni 40% sconto
    pay = fullTicket - (fullTicket * 0.4);
} else {
    pay = fullTicket
}

document.getElementById("ticket").innerHTML = `${"il tuo biglietto costa: " + pay.toFixed(2) + "€"}`


console.log(fullTicket);
console.log(pay);
    

    


    
