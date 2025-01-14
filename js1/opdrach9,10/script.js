function calc(){
    let q = document.getElementById("quantity").value;
    let itemprice = document.getElementById("itemPrice").value;
    
    if (q == "" || itemprice == ""){
        document.getElementById("total").innerHTML = "Please provide item price and/or quantity"
        return
    }else if(q <= 0 || itemprice <= 0){
        document.getElementById("total").innerHTML = "item price and/or quantity cannot be less or equal to 0"
        return
    }
    let tootal = q * itemprice
    
    let x = isInt(tootal)
    if (x){
        document.getElementById("total").innerHTML = "Totaal: $ "+ tootal + ".00"
    }else{
        document.getElementById("total").innerHTML = "Totaal: $ "+ tootal.toFixed(2)
    }
    
}   


function isInt(n) {
    return n % 1 === 0;
}