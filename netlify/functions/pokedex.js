/* eslint-disable no-unused-vars */
// mod.cjs
// eslint-disable-next-line no-shadow
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
// eslint-disable-next-line no-shadow
const chalk = (...args) => import('chalk').then(({ default: chalk }) => chalk(...args));

exports.handler = async (event, context) => {
  const eventBody = JSON.parse(event.body);
  console.log(eventBody);
  const POKE_API = `https://pokeapi.co/api/v2/pokedex/${eventBody.region}`;

  console.log('Fetching data from PokeAPI...');
  const response = await fetch(POKE_API);
  const data = await response.json();
  // console.table(data.pokemon_entries);
  return {
    statusCode: 200,
    body: JSON.stringify({
      pokemon: data.pokemon_entries,
    }),
  };
};
