/* eslint-disable no-unused-vars */
import fetch from 'node-fetch';
import chalk from 'chalk';
import { format } from 'date-fns';

// eslint-disable-next-line import/prefer-default-export
export async function handler(event) {
  const eventBody = JSON.parse(event.body);

  const now = format(new Date(), 'MM/dd/yyyy H:mm:ss');
  const color = eventBody.region === 'kanto' ? chalk.blue : chalk.green;
  console.log(color(`${now}: Call to Pokedex function for ${eventBody.region}`));

  const POKE_API = `https://pokeapi.co/api/v2/pokedex/${eventBody.region}`;

  const response = await fetch(POKE_API);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({
      pokemon: data.pokemon_entries,
    }),
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
