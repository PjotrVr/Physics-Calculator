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
    f = parseFloat(inputs[1].value);
    
    if(!isNan(j) && !isNan(f)){
        if(j == 1 / f){
            alert("Jednadžba je ispravna!");
        }
        else{
            alert("Jednadžba nije ispravna!");
        }
    }
    
    else if(isNan(j) && !isNan(f)){
        inputs[0].value = 1 / f;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(j) && isNan(f)){
        inputs[1].value = 1 / j;
        alert("Provjerite rješenje!");
    }

    else{
        alert("Niste unijeli dovoljno podataka!");
    }
})