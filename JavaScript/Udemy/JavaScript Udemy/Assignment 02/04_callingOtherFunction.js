const worldPopulation = 7900;

const percentageOfWorld1 = function (population){
    return population/worldPopulation * 100 ;
}

const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`

const indonesiaPopulationPercentage = describePopulation ("Indonesia", 275);
const japanPopulationPercentage = describePopulation ("Japan", 126);
const southKoreaPopulationPercentage = describePopulation ("South Korea", 52);

console.log(indonesiaPopulationPercentage);
console.log(japanPopulationPercentage);
console.log(southKoreaPopulationPercentage);
