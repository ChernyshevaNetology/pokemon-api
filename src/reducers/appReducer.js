import {
  APP_READY,
  SET_ABILITY_INFO,
  SET_LOADING,
  SET_POKEMON_DETAILED_INFO,
  SET_POKEMONS_LIST,
} from '../actions/app';

const initialState = {
  pokemons: [],
  pokemonInfo: null,
  abilityInfo: null,
  appReady: false,
  isLoading: false,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_READY:
      return { ...state, appReady: true };

    case SET_POKEMONS_LIST:
      return {
        ...state,
        pokemons: state.pokemons.concat(payload),
      };

    case SET_POKEMON_DETAILED_INFO:
      return {
        ...state,
        pokemonInfo: payload,
      };

    case SET_ABILITY_INFO:
      return {
        ...state,
        abilityInfo: payload,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    default:
      return state;
  }
};

export { appReducer };
