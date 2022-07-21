// console.log("ciao")


// Descrizione: 
// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.


const prezzoAlKm = 0.21;
const buttonElement = document.querySelector('.calcola');

buttonElement.addEventListener('click', function () {
    // alert("non toccare")
    const distanzaInput = document.querySelector(".distanza");
    const etaInput = document.querySelector('.eta');
    const eta = etaInput.value;
    const km = parseFloat(distanzaInput.value);
    const prezzoIntero = km * prezzoAlKm
    var prezzoScontato
    var prezzoFinale

    if (km <= 0 || isNaN(km)) {
        alert("inserisci una distanza valida")
    }
    else {
        if (eta < 18) {
            prezzoScontato = prezzoIntero * (1 - 0.2)
            prezzoFinale = prezzoScontato.toFixed(2);

        } else if (eta >= 65) {
            prezzoScontato = prezzoIntero * (1 - 0.4)
            prezzoFinale = prezzoScontato.toFixed(2);

        } else {
            prezzoFinale = prezzoIntero;
        }

    }





    const text = document.getElementById('we');
    text.innerHTML = prezzoFinale + 'Euro'


})


