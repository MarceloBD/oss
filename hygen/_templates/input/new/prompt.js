// see types of prompts:
// https://github.com/SBoudrias/Inquirer.js#prompt-types
//
// and for examples for prompts:
// https://github.com/SBoudrias/Inquirer.js/tree/master/examples
module.exports = [
  {
    type: "input",
    name: "module",
    message: "What's the module name?"
  },
  {
    type: "input",
    name: "input",
    message: "What's the input name?"
  }
];
