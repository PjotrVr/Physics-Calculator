document.getElementById("pocetna").addEventListener("click", function(){
    document.location.href = "index.html";
})

button = document.querySelector("button");
inputs = document.querySelectorAll("input");

function isNan(x){
    return x !== x;
}

button.addEventListener("click", function(){
    f = parseFloat(inputs[0].value);
    x_1 = parseFloat(inputs[1].value);
    x_2 = parseFloat(inputs[2].value);

    if(!isNan(f) && !isNan(x_1) && !isNan(x_2)){
        if((1 / f) == (1 / x_1 + 1 / x_2)){
            alert("Jednadžba je ispravna!");
        }
        else{
            alert("Jednadžba nije ispravna!");
        }
    }
    
    else if(isNan(f) && !isNan(x_1) && !isNan(x_2)){
        inputs[0].value = Math.pow((1 / x_1 + 1 / x_2), -1);
        alert("Provjerite rješenje!");
    }

    else if(!isNan(f) && isNan(x_1) && !isNan(x_2)){
        inputs[1].value = Math.pow((1 / f - 1 / x_2), -1);
        alert("Provjerite rješenje!");
    }

    else if(!isNan(f) && !isNan(x_1) && isNan(x_2)){
        inputs[2].value = Math.pow((1 / f - 1 / x_1), -1);
        alert("Provjerite rješenje!");
    }

    else{
        alert("Niste unijeli dovoljno podataka!");
    }
})