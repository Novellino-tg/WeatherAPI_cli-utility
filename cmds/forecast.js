const getRawWeather = require("../utilites/getrawweather");
const getlocation=require("../utilites/getlocation");
const ora=require("ora");
const spinner=ora();
module.exports = async function(location) {
    // 5 days weather
    spinner.start("Loading forecast.....");
    if(location==undefined){
        location=await getlocation();
    }
    
  const fullWeather = await getRawWeather(location);
  spinner.stop();
  console.log("Forecast for "+location);
  for(var i=0;i<6;i++){
      console.log(`         ${fullWeather[i].applicable_date} - Low: ${Math.ceil(fullWeather[i].min_temp)}  |   High:  ${Math.ceil(fullWeather[i].max_temp)}    |   ${fullWeather[i].weather_state_name}`);
  }
  
};