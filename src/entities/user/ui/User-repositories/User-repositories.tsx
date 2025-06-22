import { useAppDispatch, useAppSelector } from '../../model/store.ts';
import {
  getCurrentPage,
  getDataLoading,
  getUserData,
  getUserRepo,
} from '../../model/User-selectors.ts';
import styles from './User-repositories.module.css';
import { Link } from 'react-router-dom';
import { REPO_PER_PAGE } from '../../../../config/const.ts';
import { setCurrentPage } from '../../model/User-slice.ts';
import { fetchUserRepo } from '../../model/User-api-actions.ts';
import { memo, useEffect } from 'react';
import UserRepositoriesEmpty from '../User-repositories-empty';
import LoadingScreen from '../../../../pages/Loading-screen';

const UserRepositories = () => {
  const repos = useAppSelector(getUserRepo);
  const user = useAppSelector(getUserData);
  const page = useAppSelector(getCurrentPage);
  const loading = useAppSelector(getDataLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user && user.login) {
      dispatch(fetchUserRepo({ query: user.login, page }));
    }
  }, [dispatch, user, page]);

  if (!user) return;

  if (loading) {
    return <LoadingScreen />;
  }
  const totalPages = Math.ceil(user.public_repos / REPO_PER_PAGE);

  const prevPage = () => {
    if (page > 1) {
      dispatch(setCurrentPage(page - 1));
    }
  };

  const nextPage = () => {
    if (page < totalPages) {
      dispatch(setCurrentPage(page + 1));
    }
  };

  const handlePageClick = (pageElement: number) => {
    dispatch(setCurrentPage(pageElement));
  };

  const renderPagination = () => {
    const pagesToShow: (number | string)[] = [];

    pagesToShow.push(1);

    const shouldShowLeftDots = page > 3;
    const shouldShowRightDots = page < totalPages - 2;

    const startPage = Math.max(2, page - 1);
    const endPage = Math.min(totalPages - 1, page + 1);

    if (shouldShowLeftDots) {
      pagesToShow.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pagesToShow.push(i);
    }

    if (shouldShowRightDots) {
      pagesToShow.push('...');
    }

    if (totalPages > 1) {
      pagesToShow.push(totalPages);
    }

    return pagesToShow.map((pageElement, id) => (
      <button
        key={id}
        className={`${styles['pagination-button']} ${
          typeof pageElement === 'number' && pageElement === page
            ? styles['pagination-button-active']
            : ''
        }`}
        onClick={() => typeof pageElement === 'number' && handlePageClick(pageElement)}
        disabled={pageElement === '...'}
      >
        {pageElement}
      </button>
    ));
  };

  return (
    <section className={styles['user-repositories-wrapper']}>
      {repos.length === 0 ? (
        <UserRepositoriesEmpty />
      ) : (
        <>
          <h2 className={styles['user-repositories-title']}>Repositories ({user.public_repos})</h2>
          {repos.map(repo => (
            <Link className={styles['user-repositories-element']} key={repo.id} to={repo.html_url}>
              <span className={styles['user-repositories-element-title']}>
                {repo.name}
              </span>
              <p className={styles['user-repositories-element-description']}>{repo.description}</p>
            </Link>
          ))}
          <div className={styles['repositories-pagination']}>
            <span className={styles['repositories-pagination-title']}>
              {repos.length > 0
                ? `${(page - 1) * REPO_PER_PAGE + 1}–${Math.min(page * REPO_PER_PAGE, user.public_repos)}`
                : '0'}{' '}
              of {user.public_repos} items
            </span>
            <button
              className={styles['repositories-pagination-button']}
              type='button'
              onClick={prevPage}
            >
              <svg
                className={styles['repositories-pagination-button-icon']}
                width='8'
                height='12'
                viewBox='0 0 8 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M1 0.999878L6 5.99988L1 10.9999' stroke='currentColor' strokeWidth='2' />
              </svg>
            </button>
            <div> {renderPagination()}</div>

            <button
              className={styles['repositories-pagination-button']}
              type='button'
              onClick={nextPage}
            >
              <svg
                className={`${styles['repositories-pagination-button-icon']} ${styles['button-reverse']}`}
                width='8'
                height='12'
                viewBox='0 0 8 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M1 0.999878L6 5.99988L1 10.9999' stroke='currentColor' strokeWidth='2' />
              </svg>
            </button>
          </div>
        </>
      )}
    </section>
  );
};


const MemoizedUserRepositories = memo(UserRepositories);
MemoizedUserRepositories.displayName = 'UserRepositories';

export default MemoizedUserRepositories;
