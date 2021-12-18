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
    a_1 = parseFloat(inputs[0].value);
    lambda = parseFloat(inputs[1].value);
    d = parseFloat(inputs[2].value);

    if(!isNan(a_1) && !isNan(lambda) && !isNan(d)){
        if(Math.sin(toRadians(a_1)) == (lambda / d)){
            alert("Jednadžba je ispravna!");
        }
        else{
            alert("Jednadžba nije ispravna!");
        }
    }
    
    else if(isNan(a_1) && !isNan(lambda) && !isNan(d)){
        inputs[0].value = toDegrees(Math.asin(lambda / d));
        alert("Provjerite rješenje!");
    }

    else if(!isNan(a_1) && isNan(lambda) && !isNan(d)){
        inputs[1].value = Math.sin(toRadians(a_1)) * d;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(a_1) && !isNan(lambda) && isNan(d)){
        inputs[2].value = lambda / Math.sin(toRadians(a_1));
        alert("Provjerite rješenje!");
    }

    else{
        alert("Niste unijeli dovoljno podataka!");
    }
})
