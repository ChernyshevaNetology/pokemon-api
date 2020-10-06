import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Loader = () => {
  return (
    <div className="spinner">
      <HashLoader size={150} color={'#123abc'} loading />
    </div>
  );
};

export { Loader };
