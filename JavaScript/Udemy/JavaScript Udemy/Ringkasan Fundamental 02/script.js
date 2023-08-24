"use strict"; // activate strict mode
/* untuk menuliskan script dengan secure (tidak ada error)
1. strict mode forbids us to do certain things
2. it creates visible errors
*/

///////////////////////////////////////
// Functions
function logger() {
  console.log("My name is Jonas");
}

logger();

function fruitProcessor(apples, oranges) {
  //apples, oranges -> parameters
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
  // hasil dari calling function ini adalah 'value' yang berupa juice
  // sehingga value tersebut bisa disimpan ke variable (untuk di eksekusi)
}

const appleJuice = fruitProcessor(5, 0); // 5 , 0 -> argument
console.log(appleJuice);
console.log(fruitProcessor(5, 0));
// Konsep dari return, dimana dia mengembalikan nilai/value kedalam fungsi tersebut

const num = Number("23");
// built in function -> sudah ada di dalam javascript dan kita tidak harus membuat function tsb.

//////////////////////////////////////

// function declaration -> bisa dipanggil sebelum function tersebut di defined
// function expression (anonymous function)-> tidak bisa dipanggil sblm function di defined

// Function declaration

const age1 = calcAge1(1991);

function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow functions -> function expression yang cuman 1 line

const calcAge3 = (birthYeah) => 2037 - birthYeah; // otomatis return walau tidak ditulis return
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  //jika ada 2 parameter
  const age = 2037 - birthYeah;
  const retirement = 65 - age; // jika membutuhkan lebih dari 1 output
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

////////////////////////////////////////

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

////////////////////////////////////////

const friends = ["Michael", "Steven", "Peter"];
friends[2] = "Jay";
// const cuman berpengaruh ke primitive value, sedangkan array bukan primitive value

// friends = ['Bob' , 'Alice' , 'Haris']
// walaupun bisa diganti, array tidak bisa diganti semua unsurnya

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay"); //function push akan return length
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop(); //function pop akan return last element yang dihapus
console.log(popped);
console.log(friends);

friends.shift(); // First
// function shift akan return first element yang dihapus
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); // output -> -1 (gak ada di array nya)

friends.push(23);
console.log(friends.includes("Steven")); // output -> true (ada di arraynya)
console.log(friends.includes("Bob")); // output -> false (tidak ada di arraynya)
// include method menggunakan strict equality
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

///////////////////////////////////////

// Introduction to Objects
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  // object -> arrays yang punya keys (disebut property)
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas); // Output -> property nya bakal urut berdasarkan abjad

///////////////////////////////////////
// Dot vs. Bracket Notation
console.log(jonas.lastName);
console.log(jonas["lastName"]);
// [] -> Bisa diisi dengan expression/operator

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
console.log(jonas.interstedIn); // output -> undefined (doesnt exist in object)

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

// add elements in object
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

// Object Methods
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // },

  // calcAge: function () {
  //     console.log(this);
  //     return 2037 - this.birthYeah;
  // },

  calcAge: function () {
    //property yang valuenya function -> method
    this.age = 2037 - this.birthYeah; // akan membuat object baru bernama age di obj jonas
    return this.age; // this merujuk ke object dimana method itu berada
  },

  getSummary: function () {
    jonasDetail = `${this.firstName} is a ${this.calcAge()}-years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    return jonasDetail;
  },
};

// console.log(jonas["calcAge"](1991));
console.log(jonas.getSummary());

// Loop
// for(let i; i<10; i++){

// }

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
// break , continue

// Looping Backwards and Loops in Loops
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
