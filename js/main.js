'use strict';

//definizione variabili presenti nel ticket form 
const inputName = document.getElementById('input-name');
const inputDistance = document.getElementById('input-distance');
const ageRange = document.getElementById('age-range');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');

//definizione variabili nel ticket generato
const textName = document.getElementById('text-name');
const textOffer = document.getElementById('text-offer');
const numberWagon = document.getElementById('number-wagon');
const cpCode = document.getElementById('cp-code');
const textTicketPrice = document.getElementById('text-ticket-price');
const newTicket = document.querySelector ('.new-ticket');

//azione al click di submitBtn/Genera
submitBtn.addEventListener('click',
    function () {

    //valore input
    const inputNameValue = inputName.value;
    const inputDistanceValue = Number(inputDistance.value);
    const ageRangeValue = ageRange.value;

    //prezzo del biglietto
    let ticketPrice = 0.21 * inputDistanceValue;
    let message = 'Biglietto standard'

    //condizioni sconto biglietto
    if (ageRangeValue === 'under18') {
        ticketPrice = ticketPrice - ticketPrice * 0.2;
        message = 'Biglietto under 18'
    }
    else if (ageRangeValue === 'over65') {
        ticketPrice = ticketPrice - ticketPrice * 0.4;
        message = 'Biglietto over 65'
    }
    //ticketprice con solo due decimali dopo la virgola
    ticketPrice = ticketPrice.toFixed(2);

    console.log(inputNameValue, inputDistanceValue, ageRangeValue);
    console.log(ticketPrice);

    //inserisco i value nel biglietto generato
    textName.innerHTML = inputName.value;
    textTicketPrice.innerHTML = `${ticketPrice} €`;

    textOffer.innerHTML = message;

    numberWagon.innerHTML = Math.floor(Math.random() * 9) + 1;    
    cpCode.innerHTML = Math.floor(Math.random() * 99000) + 10000 ;

    //mostro il biglietto
    newTicket.classList.add('show');
    }
)

//azione al click del reset/annulla
resetBtn.addEventListener('click',
function(){

    //inputNameValue esiste solo nella funzione submitBtn.addEventListener, devo inserire variabile.valore
    inputName.value = '';
    inputDistance.value = '';
    ageRange.value = '';
    //nascondi biglietto
    newTicket.classList.remove ('show');
}
)
