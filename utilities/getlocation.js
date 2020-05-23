const axios=require("axios");
module.exports= async function (){
    try{
        const location= await axios.get("http://ip-api.com/json/");
        return location.data.city;
    }
    catch(err){
        console.log(err);
    }
    
// console.log(location.data.city);
}