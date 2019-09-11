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
  },
  {
    type: "input",
    name: "component",
    message: "What is the component type [react/pure/styled]?",
    default: "pure"
  },
  {
    type: "input",
    name: "hasQueryRenderer",
    message: "Should add relay query renderer [y/n]?",
    default: "n"
  }
];
