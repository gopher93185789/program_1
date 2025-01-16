//maak eerst variabelen aan waarbij je de totaalprijs van de appels, peren en bananen bijhoudt.

//maak een functie waar het product wordt gekocht. Gebruik argumenten om door te geven welk fruit gekocht wordt.


//maak een functie waar het product wordt verkocht. Gebruik ook hier argumenten om door te geven om welk fruit het gaat.

//maak  een aparte functie waarin je de totaalprijs berekend.
let items = [
    {name: "appel", price: 1,q: 0},
    {name: "peer", price: 2,q: 0},
    {name: "banaan", price: 3,q: 0},
]

const koopProduct = (item, q) => {
    const price = document.getElementById(`totaalPrijs_${item}`)
    const quantity = document.getElementById(`totaal_${item}`)
    const prod = items.find(({ name }) => name === item)
    prod.q += q

    quantity.value = prod.q
    price.value = prod.q * prod.price
}

const verwijderProduct = (item, q) => {
    const price = document.getElementById(`totaalPrijs_${item}`)
    const quantity = document.getElementById(`totaal_${item}`)
    const prod = items.find(({ name }) => name === item)

    if (prod.q !== 0) {
        prod.q -= q
    }
    quantity.value = prod.q
    price.value = prod.q * prod.price
}

const berekenPrijs = () => {
    const tot = document.getElementById('totaalPrijs')
    let price = 0
    items.forEach((item) => (
        price += item.price * item.q
    ));

    tot.value = Number(price)
}