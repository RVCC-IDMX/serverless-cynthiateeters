/* eslint-disable import/prefer-default-export */
import chalk from 'chalk';
import { format } from 'date-fns';

export async function handler() {
  const now = format(new Date(), 'MM/dd/yyyy H:mm:ss');
  console.log(chalk.green(`${now}: Call to Hello World function`));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
}

/*

https://www.netlify.com/blog/2021/04/02/modern-faster-netlify-functions/
export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" })
  }
}

*/
