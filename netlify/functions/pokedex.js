/* eslint-disable no-unused-vars */
// mod.cjs
// eslint-disable-next-line no-shadow
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async (event, context) => {
  const POKE_API = 'https://pokeapi.co/api/v2/pokedex/kanto';

  console.log('Fetching data from PokeAPI...');
  const response = await fetch(POKE_API);
  const data = await response.json();
  console.table(data.pokemon_entries);
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
