import { axios } from '../app/axiosConfig';

export const APP_READY = 'APP_READY';
export const SET_ABILITY_INFO = 'SET_ABILITY_INFO';
export const SET_POKEMONS_LIST = 'SET_POKEMONS_LIST';
export const SET_POKEMON_DETAILED_INFO = 'SET_POKEMON_DETAILED_INFO';
export const SET_LOADING = 'SET_LOADING';

export const setAppReady = () => ({
  type: APP_READY,
});

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});

export const setPokemonsList = (pokemons) => ({
  type: SET_POKEMONS_LIST,
  payload: pokemons,
});

export const setPokemonDetailedInfo = (detailedInfo) => ({
  type: SET_POKEMON_DETAILED_INFO,
  payload: detailedInfo,
});

export const setAbilityInfo = (abilityInfo) => ({
  type: SET_ABILITY_INFO,
  payload: abilityInfo,
});

export const loadPokemons = async (dispatch, offset) => {
  dispatch(setLoading(true));
  try {
    const {
      data: { results },
    } = await axios({
      method: 'GET',
      url: `/pokemon?limit=20&offset=${offset}`,
    });
    dispatch(setPokemonsList(results));
    return Promise.resolve(results);
  } catch (e) {
    return Promise.reject(e);
  } finally {
    dispatch(setAppReady());
    dispatch(setLoading(false));
  }
};

export const loadPokemonDetailedInfo = async (dispatch, id) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios({
      method: 'GET',
      url: `/pokemon/${id}`,
    });
    dispatch(setPokemonDetailedInfo(data));
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  } finally {
    dispatch(setAppReady());
    dispatch(setLoading(false));
  }
};

export const loadAbilityInfo = async (dispatch, id) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios({
      method: 'GET',
      url: `/ability/${id}`,
    });
    dispatch(setAbilityInfo(data));
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  } finally {
    dispatch(setAppReady());
    dispatch(setLoading(false));
  }
};
