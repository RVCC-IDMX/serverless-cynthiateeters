const chalk = require('chalk');
const { DateTime } = require('luxon');

exports.handler = async () => {
  const date = DateTime.now();
  console.log(chalk.blue(`${date}: Hello from Netlify Functions!`));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World!' }),
  };
};
