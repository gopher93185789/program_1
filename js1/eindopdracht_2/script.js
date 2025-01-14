const budget = 330_000_000_000
function main(){
    let total = 0
    
    for (let i = 1; i <= 13; i++){
        let n = document.getElementById(`numberInput${i}`).value;
        total += Number(n)
    }
    
    document.getElementById("final_answ").innerHTML = "$" + (budget - total)
}
