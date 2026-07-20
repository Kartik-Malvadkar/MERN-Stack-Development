let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    console.log("Button was clicked");
    let fact = await getfact();
    let p = document.querySelector("p");
    p.innerHTML = fact
})

let url = "https://catfact.ninja/fact";

async function getfact() {
    try {
        let res = await axios.get(url);
        console.log(res.data.fact);
        return res.data.fact;
    }
    catch (e) {
        console.log("Error -> ", e);
        return "No Fact was fetched"
    }
}