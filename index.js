const Discord = require('discord.js');
const commando = require('discord.js=commando')
const hal = new commando.Client();
const john = new commando.Client();

hal.registry.registerGroup('anime', 'Anime');
hal.registry.registerDefaults();
hal.registry.registerCommandsIn(__dirname+ "/commands");

hal.login('MzQyNzIxNzc4NzQ3MTc5MDA5.DGTzfg.uzuUk24TfzTRfSXkUvNDQEfIKG4');
john.login('MzQyNzk0ODc5OTgzODEyNjA4.DGU0nA.Wbb0z7to-OigtubBevyivK7-WpM')
