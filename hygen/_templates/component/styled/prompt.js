// see types of prompts:
// https://github.com/SBoudrias/Inquirer.js#prompt-types
//
// and for examples for prompts:
// https://github.com/SBoudrias/Inquirer.js/tree/master/examples
module.exports = [
  {
    type: "input",
    name: "name",
    message: "What's the component name?"
  },
  {
    type: "input",
    name: "path",
    message: "What's the component path?",
    default: "."
  }
];
