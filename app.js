// Add your requirements
var restify = require('restify'); 
var builder = require('botbuilder'); 


// Create chat bot
var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);


// Create bot dialogs
bot.dialog('/', function (session) {
    session.send("Hello World");
});