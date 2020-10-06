export const filterPokemons = (pokemons, key) => {
  return pokemons.filter(({ name }) =>
    name.toLowerCase().startsWith(key.toLowerCase())
  );
};
