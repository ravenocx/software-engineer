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

const friendName = ["a","b","c","d","e"]
console.table(friendName)

delete friendName[2]

console.log(friendName) 
// delete specific array item tetapi posisi index tidak bergeser (index yang di delete menjadi empty item)