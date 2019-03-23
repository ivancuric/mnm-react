import React, { memo } from 'react';
import { useHello } from '../useHello';
import styles from './Search.module.scss';

function Search({ setQuery, query, helloMessage }) {
  useHello(helloMessage, Search);

  return (
    <form
      className={styles.search}
      autoComplete="off"
      onSubmit={e => e.preventDefault()}
    >
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

export default memo(Search);
