let url ="http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    console.log(country)
    let collarr = await getColleges(country);
    show(collarr);
})

function show(collar){
    let list = document.querySelector("#list");
    list.innerHTML= "";
    for(col of collar){
        console.log(col.name)

        let li = document.createElement("li");
        li.innerHTML = col.name;
        list.appendChild(li);
    }
}


async function getColleges(country) {
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(e){
        console.log("error: ",e);
        return [];
    }
}




