import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import SearchBar from '../Search-bar';
import Logo from '../Logo';

export const Layout = () => {
  return (
    <div className={styles['layout-container']}>
      <header className={styles['header']}>
        <div className={styles['header-content']}>
          <Logo />
          <SearchBar />
        </div>
      </header>
      <main className={styles['main-container']}>
        <Outlet />
      </main>
    </div>
  );
};
