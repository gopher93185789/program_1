function symptom(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    let symp1_input = document.getElementById("sym1").value;
    let symp2_input = document.getElementById("sym2").value;
    let symp3_input = document.getElementById("sym3").value;

    if (name, age, symp1_input, symp2_input, symp3_input === ""){
        window.alert("input cannot be nil")
        return
    }


    checkSymptom(age, symp1_input.toLowerCase(), symp2_input.toLowerCase(), symp3_input.toLowerCase())
}


function checkSymptom(age, s1, s2, s3){
    let symptoms = [
        "koorts",
        "hoesten",
        "verkoudheid",
        "buikpijn",
        "huiduitslag"
    ]

    let user = {
        s1,s2,s3
    }

    let found = []

    for (i in user){
        for (j in symptoms){
            if (user[i] == symptoms[j]){
                found.push(user[i]) // just like "slice = append(slice, T any)" in go
            }
        }
    }


    if (age < 18 && found.length === 3){
        document.getElementById("warn").innerHTML = "Uw kind is ziek, hun symptomen zijn:" + " " + found[0].toUpperCase() + ", " + found[1].toUpperCase() + ", " + found[2].toUpperCase()
    }else if (age > 18 && found.length === 2){
        document.getElementById("warn").innerHTML = "Waarschuwing, uw symptomen zijn:" + " " + found[0].toUpperCase() + ", " + found[1].toUpperCase()
    }else if (age > 18 && found.length === 3){
        document.getElementById("warn").innerHTML = "U bent ziek, uw symptomen zijn:" + " " + found[0].toUpperCase() + ", " + found[1].toUpperCase() + ", " + found[2].toUpperCase()
    }else{
        document.getElementById("warn").innerHTML = "U bent niet ziek"
    }
}





