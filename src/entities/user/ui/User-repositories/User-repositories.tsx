import { useAppSelector } from '../../model/store.ts';
import { getUserRepo } from '../../model/User-selectors.ts';
import styles from './User-repositories.module.css'
import { Link } from 'react-router-dom';

export const UserRepositories = () => {

  const repos = useAppSelector(getUserRepo);
  return (
    <section className={styles['user-repositories-wrapper']}>
      <h2 className={styles['user-repositories-title']}>Repositories ({repos.length})</h2>
      {repos.slice(0,4).map((repo) => (

        <div className={styles['user-repositories-element']} key={repo.id}>
          <Link className={styles['user-repositories-element-title']} to={repo.html_url}>{repo.name}</Link>
          <p className={styles['user-repositories-element-description']}>{repo.description}</p>
        </div>
      ))}
    </section>
  );
}