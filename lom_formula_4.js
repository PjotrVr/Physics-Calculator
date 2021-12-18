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
    n_1 = parseFloat(inputs[1].value);
    n_2 = parseFloat(inputs[2].value);

    if(!isNan(ag) && !isNan(n_1) && !isNan(n_2)){
        if(Math.sin(toRadians(ag)) == (n_1 / n_2)){
            alert("Jednadžba je ispravna!");
        }
        else{
            alert("Jednadžba nije ispravna!");
        }
    }
    
    else if(isNan(ag) && !isNan(n_1) && !isNan(n_2)){
        inputs[0].value = toDegrees(Math.asin(n_1 / n_2));
        alert("Provjerite rješenje!");
    }

    else if(!isNan(ag) && isNan(n_1) && !isNan(n_2)){
        inputs[1].value = Math.sin(toRadians(ag)) * n_2;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(ag) && !isNan(n_1) && isNan(n_2)){
        inputs[2].value = n_1 / Math.sin(toRadians(ag));
        alert("Provjerite rješenje!");
    }

    else{
        alert("Niste unijeli dovoljno podataka!");
    }
})
