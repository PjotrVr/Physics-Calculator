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
    a = parseFloat(inputs[0].value);
    n = parseFloat(inputs[1].value);
    
    if(!isNan(a) && !isNan(n)){
        if(Math.tan(toRadians(a)) == n){
            alert("Jednadžba je ispravna!");
        }
        else{
            alert("Jednadžba nije ispravna!");
        }
    }
    
    else if(isNan(a) && !isNan(n)){
        inputs[0].value = toDegrees(Math.atan(n));
        alert("Provjerite rješenje!");
    }

    else if(!isNan(a) && isNan(n)){
        inputs[1].value = Math.tan(toRadians(a));
        alert("Provjerite rješenje!");
    }

    else{
        alert("Niste unijeli dovoljno podataka!");
    }
})
