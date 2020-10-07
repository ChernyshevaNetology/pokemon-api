import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../components/Button';
import { Pokemons } from '../../components/Pokemons';
import { Search } from '../../components/Search';

import { loadPokemons, loadMorePokemons } from '../../actions/app';
import { filterPokemons } from '../../common/helpers';

const PokemonListPage = () => {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState('');
  const offset = useSelector(({ app }) => app.offset);

  useEffect(() => {
    loadPokemons(dispatch);
  }, [dispatch]);

  const handleLoadMore = () => {
    loadMorePokemons(dispatch, offset + 20);
  };

  const isLoading = useSelector(({ app }) => app.isLoading);
  const pokemons = useSelector(({ app }) => app.pokemons);
  const pokemonsToRender = searchKey
    ? filterPokemons(pokemons, searchKey)
    : pokemons;

  return (
    <>
      <Search setSearchKey={setSearchKey} />
      {pokemonsToRender && <Pokemons pokemons={pokemonsToRender} />}
      {!isLoading && !searchKey && (
        <Button text="load more" handleLoadMore={handleLoadMore} />
      )}
    </>
  );
};

export { PokemonListPage };
