import { useAppDispatch, useAppSelector } from '../../model/store.ts';
import { getCurrentPage, getUserData, getUserRepo } from '../../model/User-selectors.ts';
import styles from './User-repositories.module.css';
import { Link } from 'react-router-dom';
import { REPO_PER_PAGE } from '../../../../config/const.ts';
import { setCurrentPage } from '../../model/User-slice.ts';
import { fetchUserRepo } from '../../model/User-api-actions.ts';
import { useEffect } from 'react';

export const UserRepositories = () => {
  const repos = useAppSelector(getUserRepo);
  const user = useAppSelector(getUserData);
  const page = useAppSelector(getCurrentPage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user && user.login) {
      dispatch(fetchUserRepo({ query: user.login, page }));
    }
  }, [dispatch, user, page]);

  if (!user) return;

  const totalPages = Math.ceil(user.public_repos / REPO_PER_PAGE);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

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

    if (totalPages <= 4) {
      pagesToShow.push(...pages);
    } else {
      if (page <= totalPages / 2) {
        pagesToShow.push(1, 2, 3, '...', totalPages);
      } else if (page > totalPages / 2) {
        pagesToShow.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      }
    }

    return pagesToShow.map((pageElement, id) => (
      <button
        key={id}
        className={`${styles['pagination-button']} ${typeof pageElement === 'number' && pageElement === page ? styles['pagination-button-active'] : ''}`}
        onClick={() => typeof pageElement === 'number' && handlePageClick(pageElement)}
        disabled={pageElement === '...'}
      >
        {pageElement}
      </button>
    ));
  };

  return (
    <section className={styles['user-repositories-wrapper']}>
      <h2 className={styles['user-repositories-title']}>Repositories ({user.public_repos})</h2>
      {repos.map(repo => (
        <div className={styles['user-repositories-element']} key={repo.id}>
          <Link className={styles['user-repositories-element-title']} to={repo.html_url}>
            {repo.name}
          </Link>
          <p className={styles['user-repositories-element-description']}>{repo.description}</p>
        </div>
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
    </section>
  );
};
