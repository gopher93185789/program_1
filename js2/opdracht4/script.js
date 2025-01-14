function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main() {
    let n = 10;

    for (let i = 0; i < n; i++) {
        let x = getRandomInt(1, 10)
        const c = document.createElement("div");
        c.className = `${"d"+x}`;
        c.innerText = `Dit is div nummer ${i+1}`
        document.body.appendChild(c)
    }
}

main()
