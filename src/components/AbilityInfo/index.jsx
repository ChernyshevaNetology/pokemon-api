import React from 'react';
import shortid from 'shortid';

const AbilityInfo = ({ ability }) => {
  return ability.effect_entries.map(({ effect, short_effect }, index) => {
    return (
      <div key={shortid.generate()}>
        <p>{effect}</p>
        <p>{short_effect} </p>
      </div>
    );
  });
};

export { AbilityInfo };
