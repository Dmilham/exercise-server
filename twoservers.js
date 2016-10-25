// Built in module for running HTTP
var http = require("http");

// Port (access number)
var PORT = 7000;

var PORT2 = 7500;

// Function for handling requests and responses
function niceThing(request, response){

  response.end("User, your stare at my screen is mesmerizing");

}

// Create the server
var server = http.createServer(niceThing);

// Listener (starts our server)
server.listen(PORT, function(){

  console.log("I am now listening at PORT: " + PORT);

});


// Function for handling requests and responses
function notNice(request, response){

  response.end("You so ugly you OoOgly");

}

// Create the server
var server = http.createServer(notNice);

// Listener (starts our server)
server.listen(PORT2, function(){

  console.log("I am now listening at PORT: " + PORT2);

})