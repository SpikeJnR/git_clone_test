import styles from './User-repositories-empty.module.css';

export const UserRepositoriesEmpty = () => {
  return (
    <div className={styles['empty-repositories-wrapper']}>
      <svg
        className={styles['empty-repositories-icon']}
        width='76'
        height='62'
        viewBox='0 0 76 62'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.5 0C6.49187 0 0 6.49187 0 14.5V47.5C0 55.5081 6.49187 62 14.5 62H61.5C69.5081 62 76 55.5081 76 47.5V14.5C76 6.49187 69.5081 0 61.5 0H14.5ZM9 14.5C9 11.4624 11.4624 9 14.5 9H61.5C64.5376 9 67 11.4624 67 14.5V47.5C67 50.5376 64.5376 53 61.5 53H14.5C11.4624 53 9 50.5376 9 47.5V14.5ZM48.1984 24.6422C49.37 23.4706 49.37 21.5711 48.1984 20.3995C47.0268 19.228 45.1274 19.228 43.9558 20.3995L38.2989 26.0564L32.6421 20.3995C31.4705 19.228 29.571 19.228 28.3994 20.3995C27.2279 21.5711 27.2279 23.4706 28.3994 24.6422L34.0563 30.299L28.3994 35.9559C27.2279 37.1274 27.2279 39.0269 28.3994 40.1985C29.571 41.3701 31.4705 41.3701 32.6421 40.1985L38.2989 34.5417L43.9558 40.1985C45.1273 41.3701 47.0268 41.3701 48.1984 40.1985C49.37 39.0269 49.37 37.1274 48.1984 35.9559L42.5416 30.299L48.1984 24.6422Z'
          fill='currentColor'
        />
      </svg>
      <p className={styles['not-found-title']}>Repository list is empty</p>
    </div>
  );
};
