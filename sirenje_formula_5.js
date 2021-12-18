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
    x_1 = parseFloat(inputs[0].value);
    x_2 = parseFloat(inputs[1].value);
    y_1 = parseFloat(inputs[2].value);
    y_2 = parseFloat(inputs[3].value);


    if(!isNan(x_1) && !isNan(x_2) && !isNan(y_1) && !isNan(y_2)){
        if(-x_2 / x_1 == y_2 / y_1){
            alert("Jednadžba je ispravna!");
        }
        else{
            alert("Jednadžba nije ispravna!");
        }
    }
    
    else if(isNan(x_1) && !isNan(x_2) && !isNan(y_1) && !isNan(y_2)){
        inputs[0].value = (-y_1 * x_2) / y_2;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(x_1) && isNan(x_2) && !isNan(y_1) && !isNan(y_2)){
        inputs[1].value = (-y_2 * x_1) / y_1;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(x_1) && !isNan(x_2) && isNan(y_1) && !isNan(y_2)){
        inputs[2].value = (-x_1 / x_2) * y_2;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(x_1) && !isNan(x_2) && !isNan(y_1) && isNan(y_2)){
        inputs[3].value = (-x_2 / x_1) * y_1;
        alert("Provjerite rješenje!");
    }

    else{
        alert("Niste unijeli dovoljno podataka!");
    }
})