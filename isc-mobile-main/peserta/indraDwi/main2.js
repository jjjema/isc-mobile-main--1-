const dataUser = {
    nama : "Indra Dwi Prabowo",
    umur : 21,
    tangglTahun : "27 Januari 2003"
};

dataUser.umur = 17;

console.log(dataUser);
console.log(dataUser.nama);
console.log(dataUser.umur);
console.log(dataUser.tangglTahun);

console.log(`Nama Saya: ${dataUser.nama} umur ${dataUser.umur} tanggl lahir ${dataUser.tangglTahun}`);


let data3;
// function
function getData(namaAwal, namaAkhir = "anjay") {
    console.log(`Nama: ${namaAwal} ${namaAkhir}`)
}

getData("wdwd", "huhuhu")