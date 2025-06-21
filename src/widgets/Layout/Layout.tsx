import { Outlet } from 'react-router-dom';
import SearchBar from '../Search-bar';
import Logo from '../Logo';
import { useAppSelector } from '../../entities/user/model/store.ts';
import { getUserData, getUserError } from '../../entities/user/model/User-selectors.ts';
import InitialScreen from '../../pages/Initial-screen';
import UserNotFoundScreen from '../../pages/User-not-found-screen';
import styles from './Layout.module.css';

export const Layout = () => {
  const user = useAppSelector(getUserData);
  const error = useAppSelector(getUserError);

  return (
    <div className={styles['layout-container']}>
      <header className={styles['header']}>
        <div className={styles['header-content']}>
          <Logo />
          <SearchBar />
        </div>
      </header>
      <main className={styles['main-container']}>
        {user ? <Outlet /> : error ? <UserNotFoundScreen /> : <InitialScreen />}
      </main>
    </div>
  );
};
