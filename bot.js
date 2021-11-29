const {
  Pool
} = require('pg');
const dsbot = process.env.DS_BOT;



const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () =>{

console.log("i ready!");

});


client.on("messageCreate", async message => {

if(message.content ==="!pint"){
	message.channel.send("hello, I am not fully operational yet.");
}
if(message.content ==="!salad"){
message.channel.send("hello fren, beep boop.");
}


});

client.login(dsbot);
 

