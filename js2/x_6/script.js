function write(s) {
    const tag = document.createElement('p')
    tag.innerText = s
    document.body.append(tag)
}

function load() {
    const numbersString = document.getElementById("nums").value
    if (!numbersString) {
        console.log("err")
        return
    }

    const SplitNumbers = numbersString.split(" ")
    let numbers = []
    for (let i = 0; i < SplitNumbers.length; i++) {
        let nn = parseInt(SplitNumbers[i])
        if (!nn) {
            continue
        }

        numbers.push(nn)
    }

    let sum = (arr) => {
        n = 0
        for (let i = 0; i < arr.length; i++) {
            n += numbers[i]
        }
        return n
    }


    write(`Aantal nummers: ${numbers.length}`)
    write(`Hoogste nummers: ${Math.max(...numbers)}`)
    write(`Laagste nummers: ${Math.min(...numbers)}`)
    write(`Gemiddelde: ${sum(numbers)/numbers.length}`)
}