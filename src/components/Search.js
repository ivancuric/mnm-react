import React from 'react';
import { useHello } from '../useHello';

function Search({ setQuery, query, helloMessage }) {
  useHello(helloMessage, Search);

  return (
    <form autoComplete="off">
      <label htmlFor="search">Search by author:</label>
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
