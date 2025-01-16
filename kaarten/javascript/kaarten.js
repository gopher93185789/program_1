let speelkaarten =[
    "harten",
    "klaver",
    "schoppen",
    "ruiten",
]

let cijfers = [
    "aas",
    "twee",
    "drie",
    "vier",
    "vijf",
    "zes",
    "zeven",
    "acht",
    "negen",
    "tien",
    "Boer",
    "Vrouw",
    "Heer"
]


// Gebruik vervolgens twee loops om de naam van elke speelkaart te maken. 
// Maak binnen deze loop 52 <img>-tags waarmee je de plaatjes van de kaarten
// in de HTML-pagina laat zien. 

function createImage(name) {
   const image = document.createElement('img')
   image.src = name

   document.body.append(image)
}

function main() {
    for (let i = 0; i < speelkaarten.length; i++) {
        for (let j = 0; j < cijfers.length; j++) {
            let cname = `./kaarten/${speelkaarten[i]}${cijfers[j]}.png`
            createImage(cname.toLowerCase())
        }
    }
}

main()