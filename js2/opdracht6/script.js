
const NA = ["United States", "Canada", "Mexico", "Cuba"];
const SA = ["Brazil", "Argentina", "Chile", "Peru"];
const AF = ["Nigeria", "South Africa", "Egypt", "Kenya"];
const EU = ["Germany", "France", "Italy", "Spain"];
const AS = ["China", "India", "Japan", "South Korea"];
const OS = ["Australia", "New Zealand"];
const AT = ["Antarctica"];

const continents = [NA, SA, AF, EU, AS, OS, AT];
const cc = ["NA", "SA", "AF", "EU", "AS", "OS", "AT"];

function main() {
    for (let i = 0; i < continents.length; i++){
        let country = continents[i]
        let ccode = cc[i]
        let cont = ""

        const elm = document.getElementById(ccode)
        if (!elm) {
            console.log("internal erropr")
            return
        }

        for (let j = 0; j < country.length; j++){
            cont += `${country[j]}, `
        }

        elm.innerHTML = `<p>${ccode} : ${cont}</p>`
    }

}

main()