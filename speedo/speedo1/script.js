
const months = ["jan", "feb", "mar", "apr", "mei", "jun", "jul", "aug", "sept", "oct","nov", "dec"]


const getMonths = (number) => {
    if (!number) {
        throw("invalid input")
    }

    if (number > months.length || number === 0){
        throw("invalid index")
    }

    return months[number-1]
}

const handleInput = () => {
    const inp = document.getElementById('inp')
    let val 

    try {
        val = getMonths(Number(inp.value))
    }catch (error) {
        window.alert(error)
        return
    }

    document.getElementById('sig').innerText = val
}
