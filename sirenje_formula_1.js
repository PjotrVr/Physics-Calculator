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
    R = parseFloat(inputs[1].value);
    
    if(!isNan(f) && !isNan(R)){
        if(f == (R / 2)){
            alert("Jednadžba je ispravna!");
        }
        else{
            alert("Jednadžba nije ispravna!");
        }
    }
    
    else if(isNan(f) && !isNan(R)){
        inputs[0].value = R / 2;
        alert("Provjerite rješenje!");
    }

    else if(!isNan(f) && isNan(R)){
        inputs[1].value = f * 2;
        alert("Provjerite rješenje!");
    }

    else{
        alert("Niste unijeli dovoljno podataka!");
    }
})