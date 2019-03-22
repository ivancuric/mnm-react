import React from 'react';

function Search({ setQuery, query }) {
  return (
    <form autoComplete="off">
      <label htmlFor="search">Search</label>
      <input
        type="search"
        name="search"
        id="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  );
}

export default Search;
