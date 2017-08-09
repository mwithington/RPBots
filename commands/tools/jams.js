const commando = require('discord.js-commando')
class jamsCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name:'jams',
      group:'tools',
      memberName:'jams',
      description:'Check out this tune! Posts jam url into the #post_jams_yo chatroom'
    });
  }
  async run(message, args){
        console.log("What is this: ", message.channel);
        message.channel.send();
  }
}
module.exports = jamsCommand;
