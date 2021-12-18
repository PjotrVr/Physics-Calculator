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
    v_1 = parseFloat(inputs[1].value);
    v_2 = parseFloat(inputs[2].value);
    
    if(!isNan(n_21) && !isNan(v_1) && !isNan(v_2)){
        if(n_21 == (v_1 / v_2)){
            alert("Jednadžba je ispravna!");
        }
        else{
            alert("Jednadžba nije ispravna!");
        }
    }
    
    else if(isNan(n_21) && !isNan(v_1) && !isNan(v_2)){
        inputs[0].value = v_1 / v_2;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(n_21) && isNan(v_1) && !isNan(v_2)){
        inputs[1].value = n_21 * v_2;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(n_21) && !isNan(v_1) && isNan(v_2)){
        inputs[2].value = v_1 / n_21;
        alert("Provjerite rješenje!");
    }
      
    else{
        alert("Niste unijeli dovoljno podataka!");
    }
})