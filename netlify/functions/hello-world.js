/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow
const chalk = require('chalk');
const { DateTime } = require('luxon');

exports.handler = async (event, context) => {
  const date = DateTime.now();
  console.log(chalk.blue(`Hello from Netlify Functions! ${date}`));
  // console.log(chalk.cyan(`Hello from Netlify Functions! ${date}`));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World!' }),
  };
};
