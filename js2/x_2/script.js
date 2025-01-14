function getRandomNumber(x, y) {
  return Math.round(Math.random() * (y - x) + x);
}

function main() {
    let num = getRandomNumber(0, 100)
    let ok = false;

    let g = 10


    while (!ok) {
        if (g > num) {
            console.log("lager")
        } else if (g === num) {
            console.log("Gefeliciteerd! Je hebt gewonnen!")
            ok = true
        }else{
            console.log("hoger")
        }  
    }
}

main();