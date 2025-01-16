


function agePromt(){
    let age = window.prompt("wat is jouw leeftijd")
    
    if (age > 110 || age < 0){
        window.alert("verkeerde invoer")
        return
    }

    if (age > 1 && age < 3){
        document.write("<p>Je bent een peuter</p>")
    }else if (age > 4 && age <= 6){
        document.write("<p>Je bent een kleuter</p>")
    }else if (age > 7 && age <= 12 ){
        document.write("<p>Je bent een kind</p>")
    }else if (age > 13 && age <= 16){
        document.write("<p>Je bent een puber</p>")
    }else if (age > 17 && age <= 21){
        document.write("<p>Je bent een adolescent</p>")
    }else if (age > 21){
        document.write("<p>Je bent een volwassene</p>")
    }else{
       document.write("<p>input is NaN</p>")
    }
}


agePromt()