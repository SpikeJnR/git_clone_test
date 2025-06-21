import styles from './Search-bar.module.css';
import SearchIcon from '../Search-icon';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../entities/user/model/store.ts';
import { fetchUser, fetchUserRepo } from '../../entities/user/model/User-api-actions.ts';

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.trim()) {
      const timer = setTimeout(() => {
        dispatch(fetchUser(query))
          .unwrap()
          .then((response) => {
            dispatch(fetchUserRepo(response.repos_url));
          })
          .catch(() => {});
      }, 300);

      return () => clearInterval(timer);
    }
  }, [dispatch, query]);

  return (
    <div className={styles['search-bar-wrapper']}>
      <SearchIcon />
      <input
        className={styles['search-bar-input']}
        type='text'
        placeholder='Enter GitHub username'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  );
};
