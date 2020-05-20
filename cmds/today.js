const getRawWeather = require("../utilites/getrawweather");
const getlocation= require("../utilites/getlocation");
const ora=require("ora");
const spinner=ora();
module.exports = async function(location) {  
    spinner.start("Loading today's weather");  
    if(location==undefined){
        location=await getlocation();
    }
   
  const fullWeather = await getRawWeather(location);
  // 5 days weather
  const TodaysWeather = fullWeather[0];
  const currentState = TodaysWeather["weather_state_name"];
  const temp = Math.ceil(TodaysWeather["the_temp"]);
  spinner.stop();
  // template String syntax=> you can also use normal strings
  console.log(`Current conditions in ${location}
                  ${temp} ${currentState}
                        `);
};