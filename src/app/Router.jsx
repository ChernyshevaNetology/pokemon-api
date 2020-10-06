import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import AbilityPage from '../pages/AbilityPage';
import { PokemonListPage } from '../pages/PokemonListPage';
import { Loader } from '../components/Loader';
import { PokemonPage } from '../pages/PokemonPage';

const Router = () => {
  const isLoading = useSelector((state) => state.app.isLoading);

  return (
    <>
      <Switch>
        <Route path="/" exact component={PokemonListPage} />
        <Route path="/pokemon/:id" component={PokemonPage} />
        <Route path="/ability/:id" component={AbilityPage} />
      </Switch>
      {isLoading && <Loader />}
    </>
  );
};

export { Router };
