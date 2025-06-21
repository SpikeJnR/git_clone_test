import styles from './Search-bar.module.css';
import SearchIcon from '../Search-icon';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../entities/user/model/store.ts';
import { fetchUser, fetchUserRepo } from '../../entities/user/model/User-api-actions.ts';
import { getCurrentPage } from '../../entities/user/model/User-selectors.ts';
import { resetUserData, setUserError } from '../../entities/user/model/User-slice.ts';

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState('');
  const page = useAppSelector(getCurrentPage);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && query.trim()) {
      dispatch(fetchUser(query))
        .unwrap()
        .then(() => {
          dispatch(fetchUserRepo({ query, page }));
          dispatch(setUserError(false));
        })
        .catch(() => {
          dispatch(setUserError(true));
        });
    }
  };

  return (
    <div className={styles['search-bar-wrapper']}>
      <SearchIcon />
      <input
        className={styles['search-bar-input']}
        type='text'
        placeholder='Enter GitHub username'
        value={query}
        onChange={e => {
          setQuery(e.target.value);
          dispatch(resetUserData());
        }}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
