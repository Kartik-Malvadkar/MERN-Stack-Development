let inp = document.createElement("input");
inp.placeholder = "Enter your name";
inp.style.margin = "10px"
document.body.appendChild(inp);

let h2 = document.createElement("h2");
h2.innerText = " Hello Everyone"
document.body.appendChild(h2);

inp.addEventListener("input", function(){
    h2.innerText = inp.value
})

