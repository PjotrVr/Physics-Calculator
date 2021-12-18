document.getElementById("pocetna").addEventListener("click", function(){
    document.location.href = "index.html";
})

button = document.querySelector("button");
inputs = document.querySelectorAll("input");

function isNan(x){
    return x !== x;
}

button.addEventListener("click", function(){
    j = parseFloat(inputs[0].value);
    n_l = parseFloat(inputs[1].value);
    n_s = parseFloat(inputs[2].value);
    r_1 = parseFloat(inputs[3].value);
    r_2 = parseFloat(inputs[4].value);
    
    if(!isNan(j) && !isNan(n_l) && !isNan(n_s) && !isNan(r_1) && !isNan(r_2)){
        if(j == (n_l / n_s - 1) * (1 / r_1 + 1 / r_2)){
            alert("Jednadžba je ispravna!");
        }
        else{
            alert("Jednadžba nije ispravna!");
        }
    }
    
    else if(isNan(j) && !isNan(n_l) && !isNan(n_s) && !isNan(r_1) && !isNan(r_2)){
        inputs[0].value = (n_l / n_s - 1) * (1 / r_1 + 1 / r_2);
        alert("Provjerite rješenje!");
    }

    else if(!isNan(j) && isNan(n_l) && !isNan(n_s) && !isNan(r_1) && !isNan(r_2)){
        inputs[1].value = (j * n_s) / (1 / r_1 + 1 / r_2) + n_s;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(j) && !isNan(n_l) && isNan(n_s) && !isNan(r_1) && !isNan(r_2)){
        inputs[2].value = n_l / (j / (1 / r_1 + 1 / r_2) + 1);
        alert("Provjerite rješenje!");
    }

    else if(!isNan(j) && !isNan(n_l) && !isNan(n_s) && isNan(r_1) && !isNan(r_2)){
        inputs[3].value = 1 / (j / (n_l / n_s - 1) - 1 / r_2);
        alert("Provjerite rješenje!");
    }
    
    else if(!isNan(j) && !isNan(n_l) && !isNan(n_s) && !isNan(r_1) && isNan(r_2)){
        inputs[4].value = 1 / (j / (n_l / n_s - 1) - 1 / r_1);
        alert("Provjerite rješenje!");
    }
    
    else{
        alert("Niste unijeli dovoljno podataka!");
    }
})