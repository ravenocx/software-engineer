const calcAverage = (score1 , score2 , score3) => (score1 + score2 + score3)/3;

const averageDolphin = calcAverage (85 , 54 , 41);
const averageKoala = calcAverage (23, 34, 27);

function checkWinner (averageDolphins , averageKoalas){
    if (averageDolphins >= (2 * averageKoalas)){
        return `Dolphins win (${averageDolphins} vs. ${averageKoalas})`
    }else if (averageKoalas >= (2 * averageDolphins)){
        return `Koalas win (${averageKoalas} vs. ${averageDolphins})`
    }else {
        return `NO TEAM WINS! `
    }
}

console.log (checkWinner(averageDolphin, averageKoala))
