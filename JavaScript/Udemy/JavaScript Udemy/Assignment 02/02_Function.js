const worldPopulation = 7900;

function percentageOfWorld1 (population){
    return population/worldPopulation * 100 ;
}

const indonesiaPopulationPercentage = percentageOfWorld1 (275);
const japanPopulationPercentage = percentageOfWorld1 (126);
const southKoreaPopulationPercentage = percentageOfWorld1 (52);

console.log(indonesiaPopulationPercentage , japanPopulationPercentage, southKoreaPopulationPercentage);