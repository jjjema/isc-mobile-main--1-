const getNilai = (nilai) => {
    const hasil = nilai.value ? "lulus" : "tidak lulus"
    return `Selamat anda ${hasil}`
}
console.log(getNilai({value : 74 >= 75}))


// array
let dataName = [
    "Joko", 
    ["Figo", "Gopal", 
        ["Yugo", "Miya"]
    ],
    "Budi", "Nugraha", "Aji"
]

console.log(dataName[1][2][1])
console.log(dataName.length)