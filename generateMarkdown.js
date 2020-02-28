// function generateMarkdown(data) {
//   return `
// # ${data.title}

// `;
// }

// module.exports = generateMarkdown;

//here i am declaring all the installs i am going to need to make the app work 
var inquirer = require("inquirer");
var fs = require("fs");
const axios = require("axios");
//here i am making the prompt which are the questions for the user about their project
inquirer.prompt([
  {
    type: "input",//i am putting what type of format it will be because theirs checkbox or list 
    message: "What is the title of your project?",//here is the message the user will go ahead and receive 
    name: "title" //here is the name of the question so i can use it when it needs to be referred
  },
  {
    message: "What is the description of your project?",
    name: "description"

  },
  {
    message: "What is your table of contents?",
    name: "tableofcontents"
  },
  {
    message: "Any installations?",
    name: "installation"
  },
  {
    message: "How do you use it?",
    name: "usage"
  },
  {
    message: "Any Licenses?",
    name: "license"
  },
  {
    message: "Who contributed to this project?",
    name: "contributions"
  },
  {
    message: "Any test along the way?",
    name: "test"
  },
  {
    message: "What is your GitHub email?",
    name: "email"
  }

])
//here i am doing the .then function when the code is runned through git it will go ahead and ask the questions above 
  .then(function ({ username, title, description, tableofcontents,installation, usage, license, contributions, test, email }) {
    //here is my api 
    const queryUrl = `https://api.github.com/users/${username}`;
    //here us my axios
    //i was not able to make it work, i did try different methods but none were really working 
    axios
    .get(queryUrl)
    .then(function() {
      const repoName = data(function(repo) {
        return repo.name;
      });

      const repoNameStr= repoName.join("\n");

       


      //here is the format it should appear on the read me 
  let template = `

  - Project title: ${title}
  - Description: ${description}
  - Table of Contents: ${tableofcontents}
  - Installation: ${installation}
  - Usage: ${usage}
  - License: ${license}
  - Contributing: ${contributions}
  - Tests: ${test}
  - Picture ${data.avatar_url} // this is where the picture should appear
  - User GitHub email: ${email}`//this is where the email is retrieved 


      //here i am making a writefile so when the user is done it will go ahead and create a readme 
  fs.appendFile("README.md", template, repoNameStr, function(err) {
    if (err) {
      throw err;
    }
  });
      
      });
  });