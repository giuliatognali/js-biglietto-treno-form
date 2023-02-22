'use strict';

const inputDistance = document.getElementById('input-distance');
const ageRange = document.getElementById('age-range');


let ticketPrice = inputDistance * 0.21;

let messaggio = 'Prezzo biglietto';

const ageOver18 = document.getElementById('over18');
const ageUnder18 = document.getElementById('under18');
const ageOver65 = document.getElementById('over65');

const submitBtn = document.getElementById('submit-btn');

if (ageRange === ageUnder18) {
    ticketPrice = ticketPrice - ticketPrice * 0.2;
    messaggio = 'Prezzo con sconto minorenni'
//    ticketPrice -= ticketPrice * 0,2; altro modo per scrivere quest'operazione
} 
else if (ageRange === ageOver65) {
    ticketPrice = ticketPrice - ticketPrice * 0.4;
    messaggio = 'Prezzo con sconto over 65'
}


submitBtn.addEventListener('click', 
    function() {
        console.log(inputDistance.value);

    }
)
console.log(ticketPrice);
console.log(inputDistance.value);
/* console.log(ageRange.value); */
console.log(messaggio);
