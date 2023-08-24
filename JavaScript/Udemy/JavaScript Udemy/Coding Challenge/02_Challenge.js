const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;

const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI1 = markWeight1 / (markHeight1**2);
const johnBMI1 = johnWeight1 / (johnHeight1**2);

const markBMI2 = markWeight2 / (markHeight2**2);
const johnBMI2 = johnWeight2 / (johnHeight2**2);

const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;

if(markBMI1 > johnBMI1){
    console.log(`Mark's BMI ${markBMI1} is higher than John's ${johnBMI1}!`)
} else {
    console.log(`John's BMI ${johnBMI1} is higher than Mark's! ${markBMI1}!`)
}

if(markBMI2 > johnBMI2){
    console.log(`Mark's BMI ${markBMI2} is higher than John's ${johnBMI2}!`)
} else {
    console.log(`John's BMI ${johnBMI2} is higher than Mark's! ${markBMI2}!`)
}

