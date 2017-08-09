const commando = require('discord.js-commando')
const weebUrl = ['http://truegif.com/pictures/gif/8126.gif','http://i.imgur.com/A9sPz2o.mp4','http://i0.kym-cdn.com/photos/images/list/001/072/182/d57.gif',
'https://57.media.tumblr.com/cfa17971cfce0530e6e51273c69d4e49/tumblr_nsc72kQZP01svddvro1_500.gif','https://media.giphy.com/media/3o85xnoIXebk3xYx4Q/giphy.gif',
'http://gph.is/2d4OBQ4', 'http://orig15.deviantart.net/9740/f/2012/035/f/d/weeaboo_by_dillingham-d4oovod.gif',
'https://68.media.tumblr.com/0c683018a3195a4d28df5312c14b68a1/tumblr_nbgl3kBBEf1sglj68o1_400.gif', 'https://media.giphy.com/media/QqmNFauR0qB1u/giphy.gif','http://i.imgur.com/yUHisGW.gif',
'https://68.media.tumblr.com/c5ae7205f020b025d7641496b56f8b8c/tumblr_nkcsreKv7Y1qhz95yo1_500.gif','https://media.giphy.com/media/aYVhZCKdtXZSw/giphy.gif',
'https://media.giphy.com/media/qhA7GfehV4Q7K/giphy.gif','http://thecartdriver.com/wp-content/uploads/2013/03/cars-in-space.gif','http://i0.kym-cdn.com/photos/images/original/000/908/493/f36.gif']

class weebCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name:'weeb',
      group:'anime',
      memberName:'weeb',
      description:'You are a weeb good sir'
    });

  }
  async run(message, args){
    //console.log("Message passed to Hal: ", message)
    var item = weebUrl[Math.floor(Math.random()*weebUrl.length)];

    message.channel.send("Hey @everyone "+ message.author.username+" is a weeb! "+ item );
  }
}
module.exports = weebCommand;
