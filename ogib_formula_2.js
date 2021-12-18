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
    a_k = parseFloat(inputs[0].value);
    lambda = parseFloat(inputs[1].value);
    k = parseFloat(inputs[2].value);
    d = parseFloat(inputs[3].value);
    
    if(!isNan(a_k) && !isNan(lambda) && !isNan(k) && !isNan(d)){
        if(Math.sin(toRadians(a_k)) == (lambda * k / d)){
            alert("Jednadžba je ispravna!");
        }
        else{
            alert("Jednadžba nije ispravna!");
        }
    }
    
    else if(isNan(a_k) && !isNan(lambda) && !isNan(k) && !isNan(d)){
        inputs[0].value = toDegrees(Math.asin(lambda * k / d));
        alert("Provjerite rješenje!");
    }

    else if(!isNan(a_k) && isNan(lambda) && !isNan(k) && !isNan(d)){
        inputs[1].value = Math.sin(toRadians(a_k)) * d / k;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(a_k) && !isNan(lambda) && isNan(k) && !isNan(d)){
        inputs[2].value = Math.sin(toRadians(a_k)) * d / lambda;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(a_k) && !isNan(lambda) && !isNan(k) && isNan(d)){
        inputs[3].value = lambda * k / Math.sin(toRadians(a_k));
        alert("Provjerite rješenje!");
    }

    else{
        alert("Niste unijeli dovoljno podataka!");
    }
})
