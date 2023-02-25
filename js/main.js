'use strict';

//definizione variabili presneti nel ticket form 
const inputName = document.getElementById('input-name');
const inputDistance = document.getElementById('input-distance');
const ageRange = document.getElementById('age-range');
const submitBtn = document.getElementById('submit-btn');
const resetBtn = document.getElementById('reset-btn');


submitBtn.addEventListener('click', 
    function() {

    //valore input
    const inputNameValue = inputName.value;
    const inputDistanceValue = Number(inputDistance.value);
    const ageRangeValue = ageRange.value;

    //prezzo del biglietto
    let ticketPrice = 0.21 * inputDistanceValue;

    console.log(inputNameValue, inputDistanceValue,ageRangeValue);   
    console.log(ticketPrice);
}
) 
console.log(inputName.value);
console.log(inputDistance.value);
//console.log(ageRange.value);
/* console.log(messaggio); */
