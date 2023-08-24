'use strict';

function describeCountry (country, population , capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const indonesia = describeCountry ("Indonesia", 275, "Jakarta");
const southKorea = describeCountry ("South Korea", 52, "Seoul");
const japan = describeCountry ("Japan", 126, "Tokyo");

console.log(indonesia);
console.log(southKorea);
console.log(japan);
