import {
  APP_READY,
  SET_ABILITY_INFO,
  SET_LOADING,
  SET_POKEMON_DETAILED_INFO,
  SET_POKEMONS_LIST,
  SET_LOAD_MORE,
  SET_OFFSET,
} from '../actions/app';

const initialState = {
  pokemons: [],
  pokemonInfo: null,
  abilityInfo: null,
  appReady: false,
  isLoading: false,
  offset: 0,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_READY:
      return { ...state, appReady: true };
    case SET_POKEMONS_LIST:
      return {
        ...state,
        pokemons: payload,
      };
      case SET_LOAD_MORE:
        return {
          ...state,
          pokemons: [...state.pokemons, ...payload],
        };
      case SET_OFFSET:
        return {
          ...state,
          offset: payload,
        }
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
