// console.log("ciao")


// Descrizione: 
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const prezzoAlKm = 0.21



const buttonElement = document.querySelector('.calcola');

buttonElement.addEventListener('click', function () {
    // alert("non toccare")
    const distanzaInput = document.querySelector(".distanza")
    const etaInput = document.querySelector('.eta');
    const eta= etaInput.value
    





    const prezzo = distanzaInput.value * prezzoAlKm
    const text = document.getElementById('we');
    text.innerHTML = prezzo + 'Euro'


})


