function main() {
    let n = document.getElementById("inp").value;

    if (n >= 2000) {
    window.alert("Je vraagt te veel  ):");
    return;
    }

    while (i > n) {
        const c = document.createElement("p");
        c.textContent = `Ik feliciteer je ${i} keer!!!`;
        document.body.appendChild(c);
    }
}
