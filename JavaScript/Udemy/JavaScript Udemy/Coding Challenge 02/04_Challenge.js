const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
const tips =[];
const totals = [];

const calcTip = bill => {
    return bill >= 50 && bill <=300 ? 0.15 * bill : 0.2 * bill
}

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips)
console.log(totals)

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // sum = sum + arr[i];
      sum += arr[i];
    }
    return sum / arr.length;
  }
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));