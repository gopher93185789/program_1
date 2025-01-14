"use strict";
function getRandomNumber(x, y) {
    return Math.round(Math.random() * (y - x) + x);
}
function incMap(map, k) {
    let valn = map.get(k) ?? 0;
    if (!valn) {
        valn = 0;
    }
    valn += 1;
    map.set(k, valn);
}
function getPercentage(map, k, total) {
    const val = map.get(k) ?? 0;
    if (!val) {
        return 0;
    }
    return (val / total) * 100;
}
function createDiv(i, percentage, parentContainer) {
    const newDiv = document.createElement("div");
    newDiv.className = "my-div";
    newDiv.style.width = `${3 * percentage}px`;
    parentContainer.appendChild(newDiv);
    const child = document.createElement("div");
    child.className = "text-in-div";
    let ps = Math.round(percentage);
    if (ps === 0) {
        child.textContent = `${ps}%`;
    }
    else {
        child.textContent = `${i}: ${ps}%`;
    }
    newDiv.appendChild(child);
}
function main(totalRolls) {
    const resultDiv = document.getElementById("result");
    if (!resultDiv) {
        return;
    }
    resultDiv.innerHTML = "";
    const map1 = new Map();
    for (let i = 0; i < totalRolls; i++) {
        let num = getRandomNumber(1, 6);
        incMap(map1, num);
    }
    const out = document.createElement("div");
    out.className = "container";
    const rdiv = document.getElementById("result");
    if (!rdiv) {
        return;
    }
    ;
    rdiv.appendChild(out);
    for (let i = 1; i < 7; i++) {
        const percentage = getPercentage(map1, i, totalRolls);
        createDiv(i, percentage, out);
    }
}
const roller = document.getElementById("roller");
const numRolls = document.getElementById("numrolls");
if (roller && numRolls) {
    roller.addEventListener("submit", function (event) {
        event.preventDefault();
        const totalRolls = parseInt(numRolls.value, 10);
        main(totalRolls);
    });
}
//# sourceMappingURL=script.js.map