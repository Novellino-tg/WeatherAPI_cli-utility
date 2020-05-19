// to import something
const help = require("./cmds/help");
const today = require("./cmds/today");
const forecast= require("./cmds/forecast");
const input = process.argv.slice(2);
const minimist=require("minimist");
const parsedInput=minimist(input);
const location = parsedInput.l || parsedInput.location;
const cmd = parsedInput["_"][0];
const ora=require("ora");

if (cmd == "today") {
    today(location);
} 
else if (cmd == "forecast") {
forecast(location);
} else if ((cmd == "help")) {
  help();

} else {
  console.log("Wrong Command");
}