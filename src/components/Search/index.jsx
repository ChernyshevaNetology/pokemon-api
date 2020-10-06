import React from 'react';

const Search = ({ setSearchKey }) => {
  const handleSearch = ({ target: { value } }) => {
    console.dir(value);
    setSearchKey(value);
  };

  return (
    <div className="search">
      <i className="fas fa-search icon" />
      <input
        type={'text'}
        className={'search-bar'}
        onChange={handleSearch}
        placeholder="Find Your Pokemon"
      />
    </div>
  );
};

export { Search };
