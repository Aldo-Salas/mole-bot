const { Client, MessageAttachment } = require("discord.js");
const client = new Client();

client.on("ready", () => {
  console.log("Esta funcionando");
});

client.on("message", (message) => {
  if (message.content.toLowerCase().includes("mole")) {
    let replies = ["Prueba"];

    let result = Math.floor(Math.random() * replies.length);

    message.channel.send(replies[result]);
  }
});

client.login("");
