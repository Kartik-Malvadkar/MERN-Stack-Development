let url = "https://catfact.nija/fact";

async function getfact(){
   try{
     let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact)
   }
   catch(err){
    console.log("Error-",err);
   }
}