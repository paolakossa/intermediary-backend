import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "list",
      name: "age",
      message: "What is your age?",
      choices: ["18-25", "26-35", "36-45", "46+"],
    },
  ])
  .then((answers) => {
    console.log(
      `Hello, ${answers.name}! You are in the age group: ${answers.age}`
    );
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
