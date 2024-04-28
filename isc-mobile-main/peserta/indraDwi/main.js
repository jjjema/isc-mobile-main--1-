function kali() {
    let name = "joko" 
    let nilai = 50
    let masuk = 40

    let hasil = nilai * masuk

    console.log(`Nilai ${name} adalah ${hasil}`)
}
kali();

let nilai1 = 80
const kkn = 75

let hasil1 = nilai1 >= kkn ? "selamat anda lulus" : "anda belum lulus"

console.log(hasil1)

const getNilai = (nilai2) => {
    const hasil = nilai2 ? "selamat anda lulus" : "belum lulus"
    return hasil
}
console.log()

// if else condisional
const getingPerson = (person) => {
    const name = person ? person.name : "strangers"
    return `Hai ${name}`
}

console.log(getingPerson({name : "Alice"}))
console.log(getingPerson(null))