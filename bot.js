const Discord = require('discord.js');
const client = new Discord.Client();
var config = {
    prefix : "!",
    token : proccess.env.token,
};

client.login(process.env.BOT_TOKEN);
