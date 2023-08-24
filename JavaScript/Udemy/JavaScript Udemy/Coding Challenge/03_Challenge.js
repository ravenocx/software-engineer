// Data
const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;

const koalaScore1 = 109;
const koalaScore2 = 95;
const koalaScore3 = 106;

const averageDolphin = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3)/3
const averageKoala = (koalaScore1 + koalaScore2 + koalaScore3)/3

if((averageDolphin > averageKoala) && averageDolphin >=100){
    console.log('Dolphin win!')
} else if(averageDolphin < averageKoala && averageKoala >=100){
    console.log('Koala win!')
} else if(averageDolphin === averageKoala && averageDolphin >=100 && averageKoala >=100){
    console.log('Draw!')
} else {
    console.log('Result Error!')
}

/* 
Data 1 -> Dolphin win
Data 2 -> Koala win
Data 3 -> Draw
*/
