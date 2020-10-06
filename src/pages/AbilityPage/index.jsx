import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { AbilityInfo } from '../../components/AbilityInfo';
import { loadAbilityInfo } from '../../actions/app';

const AbilityPage = ({ history: { goBack } }) => {
  const dispatch = useDispatch();
  const ability = useSelector((state) => state.app.abilityInfo);
  const { id } = useParams();

  useEffect(() => {
    loadAbilityInfo(dispatch, id);
  }, [dispatch, id]);

  return (
    <div className="pokemon-container">
      {ability && (
        <div className="pokemon-info">
          <ArrowBackIcon onClick={goBack} />
          <AbilityInfo ability={ability} />
        </div>
      )}
    </div>
  );
};

export default withRouter(AbilityPage);
