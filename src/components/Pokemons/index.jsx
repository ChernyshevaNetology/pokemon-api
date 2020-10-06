import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

import { PokemonCard } from '../PokemonCard';

const Pokemons = ({ pokemons }) => {
  return (
    <div className="pokemon-container">
      {pokemons.map(({ name }, index) => (
        <Link
          className={'pokemon'}
          style={{ textDecoration: 'none' }}
          key={shortid.generate()}
          to={`/pokemon/${name}`}
        >
          <PokemonCard className={'card'} id={index + 1} name={name} />
        </Link>
      ))}
    </div>
  );
};

export { Pokemons };
