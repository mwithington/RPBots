const commando = require('discord.js-commando')
class iwmdCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name:'iwmd',
      group:'anime',
      memberName:'iwmd',
      description:'It was me DIO!'
    });

  }
  async run(message, args){

    message.channel.send("It was me DIO https://pbs.twimg.com/profile_images/465548645568221184/wtR3VCbp_400x400.jpeg" );
  }
}
module.exports = iwmdCommand;
