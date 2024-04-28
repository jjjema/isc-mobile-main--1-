const dataDiri  =
{
    nama: "Thahta",
    umur: 20,
    tanggal_lahir: "24 Juli 2004",
    sapa: function(){
        console.log(`Halo ${this.nama}`);
    }
}

// dataDiri.umur = 19;

// //console.log(
//   //  `Nama saya ${dataDiri.nama} umur saya ${dataDiri.umur} lahir ${dataDiri.tanggal_lahir}`
// //);



// function panggil (namaAwal, namaAkhir = 'default'){
//     console.log(`Namaku ${namaAwal} ${namaAkhir}`);
// }

// //panggil("Thahta", "Nagara");
// //panggil("Prabu")


// function nilaiAkhir(nilai)
// {
//     if (nilai>90)
//     {
//         return "A";
//     }
//     else if (nilai>70)
//     {
//         return "B";
//     }
//     else
//     {
//         return "c";
//     }
// }

// const nilaiUjian = nilaiAkhir(90);
// console.log(nilaiUjian);
 
//Arrow Function
// const salam = (namaAwal, namaAkhir) => 
// {
//     return `Halo ${namaAwal} ${namaAkhir}`;
// }

// //Arrow Function tanpa blok
// const salam2 = (nama1, nama2) => `Halo ${nama1}`; //Dengan Parameter
// const salam3 = namaku => `Halo ${namaku}`; //Tanpa Parameter

const angkas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const angkasKaliDua = angkas.map((angka)=>angka * 2);

angkas.forEach((value) => value * 2);

console.log();



const AngkaGenap = angkas.filter((value)=> value % 2 == 0)
console.log("angka genap = " + AngkaGenap);

const AngkaGanjil = angkas.filter((value)=> value % 2 != 0)
console.log("angka ganjil = " + AngkaGanjil);