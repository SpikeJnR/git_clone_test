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
    dispatch(setCurrentPage(page - 1));
  };

  const nextPage = () => {
    dispatch(setCurrentPage(pages[page + 1]));
  };

  const handlePageChange = (pageNum: number) => {
    dispatch(setCurrentPage(pageNum));
  };

  const getVisiblePages = () => {
    const visiblePages: (number | string)[] = [];
    visiblePages.push(1);

    if (totalPages <= 4) {
      for (let i = 2; i <= totalPages; i++) {
        visiblePages.push(i);
      }
      return visiblePages;
    }

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
          {' '}
          {} of {user.public_repos} items
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
        <div className={styles['pagination-numbers']}>
          {getVisiblePages().map((p, index) => (
            typeof p === 'number' ? (
              <button
                key={index}
                className={`${styles['pagination-button']} ${p === page ? styles['active'] : ''}`}
                onClick={() => handlePageChange(p)}
              >
                {p}
              </button>
            ) : (
              <span key={index} className={styles['ellipsis']}>{p}</span>
            )
          ))}
        </div>

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
