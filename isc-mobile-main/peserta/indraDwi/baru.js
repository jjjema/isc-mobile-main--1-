// function
function getData(namaAwal, namaAkhir) {
    console.log(`${namaAwal} ${namaAkhir}`)
    return;
}

getData("indra", 212);

//
const getingPerson = (person) => {
    const name = person ? person.name : "strangers";
    return `Hai ${name}`;
}

console.log(getingPerson({name : "Alice"}));
console.log(getingPerson(null));

//
function nilai(nilaiUjian, daftarHadir) {
    return `Hasil Nilai: ${nilaiUjian} dan hadir ${daftarHadir}`;
}
const hasil = nilai(70, 80)
console.log(hasil)


const name1 = (value) => {
    return `hai ${value}`;
}

console.log(name1("dafin"));
console.log("daifn");

const angkas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const angkaKaliDua = angkas.map((ha) => ha * 2);
const angkaKaliTiga = angkas.forEach((value) => value * 3);
const angkaGenap = angkas.filter((value) => value % 2 == 0);

console.log(`Angka kali tiga: ${angkaKaliTiga}`);
console.log(`Angka kali dua: ${angkaKaliDua}`);
console.log(`Angka genap: ${angkaGenap}`);

//
const dataDiri = {
    name: "supri",
    old: 20,
    city: "Surabaya",
}