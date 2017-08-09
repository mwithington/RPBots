const Discord = require('discord.js');
const commando = require('discord.js-commando')
const hal = new commando.Client();
const john = new Discord.Client();
const config = {'prefix':"+"}

//This is hals Configs he is a commando bot vs John who is not
hal.registry.registerGroups([['anime', 'Anime'], ['tools', 'Tools']]);
hal.registry.registerDefaults();
hal.registry.registerCommandsIn(__dirname + "/commands");

john.on('guildMemberAdd', member => {
  // Send the message to the guilds default channel (usually #general), mentioning the member
  member.guild.defaultChannel.send(`Oh...Hello welcome to Database management, ${member}`);

  // If you want to send the message to a designated channel on a server instead
  // you can do the following:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Oh...Hello welcome to Database management, ${member}`);
});
john.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;

  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(message.author.username=="MRxSMITH12"){
    message.reply("Please sit down, we are in the middle of the lecture.")
  };

});

hal.login('MzQyNzIxNzc4NzQ3MTc5MDA5.DGTzfg.uzuUk24TfzTRfSXkUvNDQEfIKG4');
john.login('MzQyNzk0ODc5OTgzODEyNjA4.DGU0nA.Wbb0z7to-OigtubBevyivK7-WpM')
