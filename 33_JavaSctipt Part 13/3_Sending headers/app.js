const url = "https://icanhazdadjoke.com/";

async function getjocks() {
    try{
        const config = { headers: {Accept: "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);
    }catch (err){
        console.log(err);
    }
}