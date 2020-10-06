import React from 'react';
import { useSelector } from 'react-redux';

const Button = ({ handleLoadMore, text }) => {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <button disabled={isLoading} className="btn" onClick={handleLoadMore}>
      {text}
    </button>
  );
};

export { Button };
