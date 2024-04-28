
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const angkaKaliEmpat = angka.map((angka) => angka * 4);
const angkaKaliLima = angka.map((angka) => angka * 5);

angka.forEach((value) => value * 8);

const angkaGanjil = angka.filter((value) => value % 2 != 0);
const angkaGenap = angka.filter((value) => value % 2 == 0);

console.log("angka ganjil", angkaGanjil);
console.log("angka genap", angkaGenap);

console.log("semua angka", angka);
console.log("angka kali empat", angkaKaliEmpat);
console.log("angka kali lima", angkaKaliLima);