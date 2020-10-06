import React from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';

const PokemonInfo = ({ pokemon }) => {
  return (
    <div className="pokemon-wrapper">
      <div className="item">
        <h1>Sprites</h1>
        <img src={pokemon.sprites.front_default} alt="" />
        <img src={pokemon.sprites.back_default} alt="" />
        <img src={pokemon.sprites.front_shiny} alt="" />
        <img src={pokemon.sprites.back_shiny} alt="" />
      </div>
      <div className="item">
        <h1>detailedInfo</h1>
        {pokemon.stats.map(({ stat, base_stat }) => (
          <p key={shortid.generate()}>
            {stat.name} {base_stat}{' '}
          </p>
        ))}
      </div>
      <div className="item">
        <h2>Abilities</h2>
        {pokemon.abilities.map(({ ability: { name } }) => (
          <Link key={shortid.generate()} to={`/ability/${name}`}>
            <p>{name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { PokemonInfo };
