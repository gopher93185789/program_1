
let s1 = "de zee die bruist";
let s2 = "je stortte je in m'n zee en we waren gellukig";
let s3 = "zinnen van de zee";
let s4 = "maar wat zo'n zin zee";

let s5 = "dat zegt de zee mij niet";
let s6 = "een zalig gevoel";
let s7 = "de zee die rust";
let s8 = "dan betekent";

let s9 = "m'n hart was een rustige zee";
let s10 = "de zee ruist zinnen";

let stringSlice = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10]

let sentence = ""
let counter = 0

function isodd (p1){
    if (p1 % 2 == 0){
        return true
    }

    return false
}

// make the first letter of each sentence a uppercase
// for (let i of stringSlice){
//     counter++
//     b = isodd(counter)
//     if (b){
//         sentence +=  " " + i
//     }else{
//         sentence += " " + i[0].toUpperCase() + i.substring(1)
//     }
// }

for (let i of stringSlice){
    counter++
    b = isodd(counter)
    if (b){
        sentence +=  "</br>" + i
    }else{
        sentence += " </br>" + i.toUpperCase()
    }
}

document.write("<p>" + sentence + "</p>")

console.log(sentence.length)

