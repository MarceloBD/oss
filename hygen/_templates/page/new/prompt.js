// see types of prompts:
// https://github.com/SBoudrias/Inquirer.js#prompt-types
//
// and for examples for prompts:
// https://github.com/SBoudrias/Inquirer.js/tree/master/examples
module.exports = [
  {
    type: "input",
    name: "name",
    message: "What's the page name?"
  },
  {
    type: "input",
    name: "component",
    message: "What is the component type [react/pure]?",
    default: "pure"
  },
  {
    type: "input",
    name: "hasQueryRenderer",
    message: "Is there a relay query renderer [y/n]?",
    default: "n"
  }
];
