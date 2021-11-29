const {
  Pool
} = require('pg');

const dotenv = require('dotenv'); 
const Discord = require("discord.js");


const dsbot = process.env.DS_BOT;


const client = new Discord.Client({
	allowedMentions: {
		parse: ['users', 'roles'],
		repliedUser: true
},
	intents: [
		"GUILDS",
		"GUILD_MESSAGES",
		"GUILD_PRESENCES",
		"GUILD_MEMBERS",
		"GUILD_MESSAGE_REACTIONS"
		],
});




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
 

