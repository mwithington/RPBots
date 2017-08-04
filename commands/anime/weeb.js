const commando = require('discord.js=commando')

class weebCommand extends commando.Command {
  constructor() {
    super(client, {
      name:'weeb',
      group:'anime',
      memberName:'weeb',
      description:'You are a weeb good sir'
    });

  }
  async run(message, args){

  }
}
module.exports = weebCommand;
