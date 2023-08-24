// <script src="name.js"> </script>

// Variable
let NUMBER = 9812;
let firstName = "Haris";
firstName = "Adam"; // for reassign new value to the existing variable
const birthYear = 2003; //const immutable (tidak bisa diubah valuenya)

/* (Tidak bisa seperti ini)
let birthMonth = "January";
const birthMonth = "October";

age++;
age--;
*/

// mdn operator precedence 

////////////////////////////////////

// Template Literals
const haris= `I'm ${firstName} , born in ${birthYear}, currently living in Jakarta.`; //Template Literals
console.log (`Just a regular string....`)
console.log ("I'm ${firstName},\n\
born in ${birthYear},\n\
currently living in Jakarta.") // $ tidak bisa digunakan ketika tidak menggunakan template literal
console.log (`I'm ${firstName},
born in ${birthYear},
currently living in Jakarta.`)

////////////////////////////////////

//type conversion
const inputYear = "2003";
console.log(Number(inputYear));
const birthPlace = "Jakarta";
console.log(Number(birthPlace)); //Output -> NaN (Not a Number) tapi value type nya tetap number
let date = 17;
console.log(String(date));

//type coercion (+ otomatis menjadi string, selain + akan menjadi number)
console.log("I am " + 20 + " years old") // 20 otomatis akan menjadi string
console.log('23' + '10' + 3); // Output string
console.log('23' - '10' - 3); // Output number
console.log('23' / '2') // Output number

////////////////////////////////////

// 5 falsy values : 0, '', undefined,null,NaN. (Output = false)
// Selain falsy values -> truthy values (Output = true)
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100; // kondisi di if-else selalu di convert ke boolean secara otomatis (type coercion)
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}
let height = 0; //output -> else 
if (height) { // bisa untuk cek variable nya exis atau tidak (undefined)
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

////////////////////////////////////

const age = Number(prompt("Your age : "));
if(age === 18) console.log('Adult'); // strict equality operators -> gak melakukan type coercion (disarankan untuk clean code )
console.log('18' == 18); // loose equality operator -> melakukan type coercion
if(age!== 19) console.log('why not 19?') //strict inequality operator (= nya cuman 1 -> ! = =)

////////////////////////////////////

const hasDriversLicense = true; // A
const hasGoodVision = true; // B
const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision && !isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

////////////////////////////////////

const day = 'friday';
	// switch case digunakan ketika kondisinya berupa integer atau string
	// if else digunakan ektika kondisinya berupa boolean
switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break; // sama seperti cpp, jika tidak break maka akan print sampai case terakhir (including default)
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday': // case wednesday & thusday sama block codenya
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

////////////////////////////////////

// Expression -> produce values
// Statements -> Like full sentences that translate our actions that we want the program to perform
// operator merupakan expression (karena dia produce value)

////////////////////////////////////
// The Conditional (Ternary) Operator

age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// Ternary operator bisa menghasilkan value karena operator merupakan expression
// sehingga bisa di masukkan kedalam variable
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`); 
// karena placeholder di template literal hanya bisa memanggil expression,
// sehingga bisa menggunakan ternary operator

////////////////////////////////////

// transpile and polyfill -> mengconvert versi js yg terbaru ke ES5
// ES5 -> standard untuk browser versi lama

////////////////////////////////////

