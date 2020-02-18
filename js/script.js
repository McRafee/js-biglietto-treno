// Sistema di calcolo per costo biglietto treno
// Informazioni: età |  Km da percorrere - costo per Km 0.21 €
// Sconti applicati: ≤ 18 anni - 20% | > 65 - 40%


// dati in ingresso
var age = prompt("Inserisci la tua età.");
var distance = prompt("Inserisci la distanza da percorrere espressa in Km");
var priceForKm = 0.21; // costo per Km 0.21 €
var ticketPrice = (priceForKm * distance); // costo del biglietto al netto degli sconti
//console.log(ticketPrice); //debug

var discountYoung = ticketPrice * 0.20; // sconto ≤ 18 anni - 20%
var discountOld = ticketPrice * 0.40; // sconto > 65 - 40%

var ticketType = "Standard";

if (age >= 65) {
    var ticketFinalPrice = ticketPrice - discountOld;
    ticketType = "Senior";
} else if (age <= 18) {
    var ticketFinalPrice = ticketPrice - discountYoung;
    ticketType = "Junior";
} else {
    ticketFinalPrice = ticketPrice;
}

//console.log(ticketFinalPrice + " " + ticketType); //debug

// passaggio dati
document.getElementById('ticket-type').innerHTML = ticketType;
document.getElementById('age').innerHTML = age;
document.getElementById('distance').innerHTML = distance;
document.getElementById('price').innerHTML = ticketFinalPrice;
