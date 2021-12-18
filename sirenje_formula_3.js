document.getElementById("pocetna").addEventListener("click", function(){
    document.location.href = "index.html";
})

button = document.querySelector("button");
inputs = document.querySelectorAll("input");

function isNan(x){
    return x !== x;
}

button.addEventListener("click", function(){
    m = parseFloat(inputs[0].value);
    y_1 = parseFloat(inputs[1].value);
    y_2 = parseFloat(inputs[2].value);

    if(!isNan(m) && !isNan(y_1) && !isNan(y_2)){
        if(m == (y_2 / y_1)){
            alert("Jednadžba je ispravna!");
        }
        else{
            alert("Jednadžba nije ispravna!");
        }
    }
    
    else if(isNan(m) && !isNan(y_1) && !isNan(y_2)){
        inputs[0].value = y_2 / y_1;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(m) && isNan(y_1) && !isNan(y_2)){
        inputs[1].value = y_2 / m;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(m) && !isNan(y_1) && isNan(y_2)){
        inputs[2].value = m * y_1;
        alert("Provjerite rješenje!");
    }

    else{
        alert("Niste unijeli dovoljno podataka!");
    }
})