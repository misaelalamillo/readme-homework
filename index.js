// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
{
    type: "input",
    message: "What is your name?",
    name:"name"
},
{
    message: "What is your location?",
    name: "location"

},
{
    message: "What is your bio?",
    name: "bio"
},
{
    message: "What is your Linked-In?",
    name: "linkedin"
},
{
    message: "What is your Github username?",
    name: "github"
}
])
.then(function(response){
    var data =
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>Hi! My name is ${response.name} </h1>
<br>
<h4>I am from ${response.location} </h4>
<br>
<h3><b>Example Heading</b></h3><button>Contact Me</button>
<br>
<div> My GitHub username is ${response.github}</div
<br>
<div> LinkedIn:${response.linkedin}</div>
    
</body>
</html>
   `
    
    
    
    
    fs.writeFile("index.html", data, function(err){
        if (err) throw err;
    })
})