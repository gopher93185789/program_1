const homeTeams = ["sigmas", "ligmas", "huzz", "bruzz", "quans"]
const awayTeams = ["lugs", "leets", "hellcat", "nys", "octopi"]


function main() {
    // o(n2)
    for (let i = 0; i < homeTeams.length; i++){
        for (let j = 0; j < awayTeams.length; j++){
            const elm = document.createElement('p')
            elm.innerText = homeTeams[i] + "->" + awayTeams[j]
            document.body.append(elm)
        }
        const br = document.createElement("br")
        document.body.append(br)
    }
}
main()