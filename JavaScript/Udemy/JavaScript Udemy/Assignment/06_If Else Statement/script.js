const country = "Indonesia";
const population = 275;

const avrgPopulation = 33;
if (population > avrgPopulation){
    console.log(`${country}'s population is above average`);
}else {
    console.log(`${country}'s population is ${population - avrgPopulation} million below average`)
}