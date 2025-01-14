// const up = image.src = './assets/arrows-up.png'
// const down =  image.src = './assets/arrows-down.png'

const hond = 5.5
const gecko =  11
const olifant = 1.6
const vlieg =  1216


const handleLower = (guess, dier) => {
    const image = document.getElementById('image')
    const textArea = document.getElementById('result')
    image.src = './assets/arrows-down.png'
    textArea.innerText = `kies lager, 1 mens jaar is niet ${guess} voor een ${dier} `
}

const handleHigher = (guess, dier) => {
    const image = document.getElementById('image')
    const textArea = document.getElementById('result')
    image.src = './assets/arrows-up.png'
    textArea.innerText = `kies hoger, 1 mens jaar is niet ${guess} voor een ${dier} `
}

const handleOk = (guess, dier) => {
    const image = document.getElementById('image')
    const textArea = document.getElementById('result')
    image.src = './assets/ok.png'
    textArea.innerText = `je hebt het goed, 1 mens jaar is ${guess} voor een ${dier} `
}

function submit(animal) {
    const inp = document.getElementById('usr-inp')
    const guess = parseFloat(inp.value)

    switch(animal) {
        case 'Hond':
            guess < hond ? handleHigher(guess, "hond"): 
            guess > hond ? handleLower(guess, "hond"): 
            guess === hond ? handleOk(guess, "hond") : ""
            break
        case 'Gecko':
            guess < gecko ? handleHigher(guess, "gecko"): 
            guess > gecko ? handleLower(guess, "gecko"): 
            guess === gecko ? handleOk(guess, "gecko") : ""
            break
        case 'Olifant': 
            guess < olifant ? handleHigher(guess, "olifant"): 
            guess > olifant ? handleLower(guess, "olifant"): 
            guess === olifant ? handleOk(guess, "olifant") : ""
            break
        case 'Vlieg':
            guess < vlieg ? handleHigher(guess, "vlieg"): 
            guess > vlieg ? handleLower(guess, "vlieg"): 
            guess === vlieg ? handleOk(guess, "vlieg") : ""
            break
        default:
            console.log("none")
    }

}