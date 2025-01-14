document.getElementById("startButton").addEventListener("click", function() {
    let getal = parseInt(prompt("Voer een getal in:"));

 
    if (isNaN(getal)) {
        alert("Dat is geen geldig getal. Probeer het opnieuw.");
        return;
    }

  
    let resultaat = "<h2>Tafel van " + getal + ":</h2><ul>";
    for (let i = 1; i <= 10; i++) {
        resultaat += "<li>" + getal + " x " + i + " = " + (getal * i) + "</li>";
    }
    resultaat += "</ul>";

    document.getElementById("result").innerHTML = resultaat;
});