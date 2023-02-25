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

submitBtn.addEventListener('click',
    function () {

    //valore input
    const inputNameValue = inputName.value;
    const inputDistanceValue = Number(inputDistance.value);
    const ageRangeValue = ageRange.value;

    //prezzo del biglietto
    let ticketPrice = 0.21 * inputDistanceValue;

    //condizioni sconto biglietto
    if (ageRangeValue === 'under18') {
            ticketPrice = ticketPrice - ticketPrice * 0.2;
    }
    else if (ageRangeValue === 'over65') {
        ticketPrice = ticketPrice - ticketPrice * 0.4;
    }
    //ticketprice con solo due decimali dopo la virgola
    ticketPrice =ticketPrice.toFixed(2);

    console.log(inputNameValue, inputDistanceValue, ageRangeValue);
    console.log(ticketPrice);

    }
)

