// ECMAScript (ES)

// document.writeln()

// escape sequence
console.log("Eko \nKurniawan \nKhannedy\n");
console.log("\\Home\\khannedy\n");
console.log('"Programmer Zaman Now"\n');
console.log("'Belajar JavaScript'\n");

/*
console.info() -> memberitahu informasi (sama seperti console.log)
console.warn() -> peringatan
console.error() -> memberitahu informasi error
console.table() -> memberitahu informasi dalam bentuk table -> untuk tipe data array
*/

let numberInt = "30";
let numberFloat = "30.1apapun";

console.log(parseInt(numberInt));
console.log(parseFloat(numberFloat));
console.log(Number(numberFloat)); // jika terdapat huruf 1 pun langsung menjadi NaN beda seperti parse
console.log(isNaN(Number(numberFloat)));

const friendName = ["a", "b", "c", "d", "e"];

delete friendName[2];
// delete specific array item tetapi posisi index tidak bergeser (index yang di delete menjadi empty item/undefined)

console.log(friendName);
console.table(friendName);

// alert("Hello World")
// const name = prompt("Siapa nama anda : ") // return string
// const isAgree = confirm("Apakah anda setuju?") // return boolean

// undefined -> case 1 : terdapat variable tetapi belum ada nilainya
// case 2 : memanggil variable, array ataupun object properties yang belum atau tidak di declare

const myName = null;
// null -> representasi data kosong, sudah terdapat value variablenya tetapi isinya kosong
console.log(typeof myName); // typeof dari null adalah object begitupun dengan array

const friends = {
  f1: "dinda",
  f2: "agus",
  f3: "suntoso",
  f4: undefined,
};

// in untuk mengecek apakah sebuah index atau property itu ada, walaupun nilainya undefined atau null tetap return true
const isF4 = "f4" in friends; // true
const isF5 = "f5" in friends; // false
const isOne = 2 in friendName; // false karena tidak terdapat index pada 2
console.log(isF4);
console.log(isOne);

// nullist value adalah null dan undefined
// nullish coalescing operator -> mirip seperti ternary tetapi dikhususkan untuk nullist value
let parameter;
let data = parameter;
// if (data === undefined || data === null) {
//   data = "nilai default";
// }
data = parameter ?? "nilai default";

// optional chaining operator digunakan ketika ingin mengakses property dari sebuah object yang bernilai nullish
const person = {};
console.log(person?.address?.country); // jika properti yang diakses tidak ada maka akan return undefined

// Operator boolean pada falsy and truthy value

// operator || (OR) -> Operator ini akan mengambil nilai pertama yang truthy.
// Jika tidak ada satupun yang bernilai truthy, maka yang terakhir yang akan diambil
console.log(0 || undefined); // undefined
console.log("NaN" || null); // "NaN"

// operator && (AND) -> Operator ini akan mengambil nilai pertama yang falsy.
// Jika tidak ada satupun yang bernilai falsy, maka yang terakhir yang akan diambil
console.log("0" && "undefined"); // "undefined"
console.log(null && "NaN"); // null

console.log(("null" && "eeee") || "asd"); // jika seperti ini operasi yang paling kiri diselesaikan terlebih dahulu

// label hanya bisa digunakan untuk break dan continue dalam loop
loop1: for (let i = 0; i < 3; i++) {
  loop2: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      // continue loop1; // iterasi terkini dari loop2 berhenti dan lanjut ke iterasi loop1 yang selanjutnya
      break loop1// label pada break loop mengacu kepada loop mana yang ingin diberhentikan
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// for in -> ada index/key
for (const index in friends) {
  // console.log(`${index} : ${friends.index}`) // karena index sebuah string maka tidak bisa menggunakan .
  console.log(`${index} : ${friends[index]}`);
}

// for of -> tidak ada index/key
// for of hanya untuk iterable object (array, string)
for (const value of friendName) {
  console.log(value);
}
