function main() {
    const reset = document.getElementById("flag")
    reset.innerHTML = ""
    const x = document.getElementById("x").value;
    const y = document.getElementById("y").value;

    let line = "";
    let final = ""

    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            line += "*"
        }
        
        if (i === y-1){
            final += line;
        }else{
            final += line + "\n";
        }
        line = "";
    }

    reset.innerText = final
}


