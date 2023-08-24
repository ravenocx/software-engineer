const populations = [275 , 126 , 52, 67];

if(populations.length === 4){
    console.log('4 element');
}else {
    console.log('not 4 element');
}

const worldPopulation = 7900;

const percentageOfWorld1 = function (population){
    return population/worldPopulation * 100 ;
}

const indonesia = percentageOfWorld1 (populations[0]);
const Japan = percentageOfWorld1 (populations[1]);
const southKorea = percentageOfWorld1 (populations[2]);
const malaysia = percentageOfWorld1 (populations[3]);

const percentages = [indonesia , Japan , southKorea , malaysia];
console.log(percentages);