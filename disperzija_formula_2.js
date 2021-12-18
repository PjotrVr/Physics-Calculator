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
    n = parseFloat(inputs[0].value);
    v = parseFloat(inputs[1].value);
    
    if(!isNan(n) && !isNan(v)){
        if(n == (3 * 10**8) / v){
            alert("Jednadžba je ispravna!");
        }
        else{
            alert("Jednadžba nije ispravna!");
        }
    }
    
    else if(isNan(n) && !isNan(v)){
        inputs[0].value = (3 * 10**8) / v;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(n) && isNan(v)){
        inputs[1].value = (3 * 10**8) / n;
        alert("Provjerite rješenje!");
    }

    else{
        alert("Niste unijeli dovoljno podataka!");
    }
})
