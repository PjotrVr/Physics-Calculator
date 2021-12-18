document.getElementById("pocetna").addEventListener("click", function(){
    document.location.href = "index.html";
})

button = document.querySelector("button");
inputs = document.querySelectorAll("input");

function isNan(x){
    return x !== x;
}

function toDegrees(angle) {
    return angle * (180 / Math.PI);
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

button.addEventListener("click", function(){
    ag = parseFloat(inputs[0].value);
    n = parseFloat(inputs[1].value);
    
    if(!isNan(ag) && !isNan(n)){
        if(Math.sin(toRadians(ag)) == (1 / n)){
            alert("Jednadžba je ispravna!");
        }
        else{
            alert("Jednadžba nije ispravna!");
        }
    }
    
    else if(isNan(ag) && !isNan(n)){
        inputs[0].value = toDegrees(Math.asin(1 / n));
        alert("Provjerite rješenje!");
    }

    else if(!isNan(ag) && isNan(n)){
        inputs[1].value = 1 / Math.sin(toRadians(ag));
        alert("Provjerite rješenje!");
    }
    
    else{
        alert("Niste unijeli dovoljno podataka!");
    }
})
