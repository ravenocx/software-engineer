const worldPopulation = 7900;

function percentageOfWorld1 (population){
    return population/worldPopulation * 100 ;
}

// const indonesiaPopulation = 275;
// const japanPopulation = 126;
// const southKoreaPopulation = 52;

const countryPopulation = [275 , 126 , 52 , 80]
const percentages2 = []

for(let i=0 ; i < countryPopulation.length ; i++){
    percentages2.push(percentageOfWorld1(countryPopulation[i]))
}

console.log(percentages2)