document.getElementById("pocetna").addEventListener("click", function(){
    document.location.href = "index.html";
})

button = document.querySelector("button");
inputs = document.querySelectorAll("input");

function isNan(x){
    return x !== x;
}

button.addEventListener("click", function(){
    n_21 = parseFloat(inputs[0].value);
    n_2 = parseFloat(inputs[1].value);
    n_1 = parseFloat(inputs[2].value);
    
    if(!isNan(n_21) && !isNan(n_2) && !isNan(n_1)){
        if(n_21 == (n_2 / n_1)){
            alert("Jednadžba je ispravna!");
        }
        else{
            alert("Jednadžba nije ispravna!");
        }
    }
    
    else if(isNan(n_21) && !isNan(n_2) && !isNan(n_1)){
        inputs[0].value = n_2 / n_1;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(n_21) && isNan(n_2) && !isNan(n_1)){
        inputs[1].value = n_21 * n_1;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(n_21) && !isNan(n_2) && isNan(n_1)){
        inputs[2].value = n_2 / n_21;
        alert("Provjerite rješenje!");
    }
      
    else{
        alert("Niste unijeli dovoljno podataka!");
    }
})