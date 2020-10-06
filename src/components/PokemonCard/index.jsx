import React from 'react';

const PokemonCard = ({ name, id }) => {
  return (
    <>
      <div className="img-container">
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt={name}
        />
      </div>
      <div className="pokemon-name">
        <h2>{name}</h2>
      </div>
    </>
  );
};

export { PokemonCard };
