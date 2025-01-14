function main() {
    let n = document.getElementById("inp").value;

    if (n >= 2000) {
    window.alert("Je vraagt te veel  ):");
    return;
    }

    for (let i = 0; i < n; i++) {
    const c = document.createElement("p");
    c.textContent = `Ik feliciteer je ${i} keer!!!`;
    document.body.appendChild(c);
    }
}
