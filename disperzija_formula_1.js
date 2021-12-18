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
    a = parseFloat(inputs[1].value);
    b = parseFloat(inputs[2].value);

    if(!isNan(n) && !isNan(a) && !isNan(b)){
        if(n == Math.sin(toRadians(a)) / Math.sin(toRadians(b))){
            alert("Jednadžba je ispravna!");
        }
        else{
            alert("Jednadžba nije ispravna!");
        }
    }
    
    else if(isNan(n) && !isNan(a) && !isNan(b)){
        inputs[0].value = Math.sin(toRadians(a)) / Math.sin(toRadians(b));
        alert("Provjerite rješenje!");
    }

    else if(!isNan(n) && isNan(a) && !isNan(b)){
        inputs[1].value = toDegrees(Math.asin(n * Math.sin(toRadians(b))));
        alert("Provjerite rješenje!");
    }

    else if(!isNan(n) && !isNan(a) && isNan(b)){
        inputs[2].value = toDegrees(Math.asin(Math.sin(toRadians(a)) / n));
        alert("Provjerite rješenje!");
    }

    else{
        alert("Niste unijeli dovoljno podataka!");
    }
})
