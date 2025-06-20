import styles from './Initial-screen.module.css';

export const InitialScreen = () => {
  return (
    <div className={styles['initial-screen-wrapper']}>
      <svg
        className={styles['initial-screen-icon']}
        width='66'
        height='66'
        viewBox='0 0 66 66'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M29.4936 0.916687C13.7365 0.916687 0.916626 13.7365 0.916626 29.4937C0.916626 45.2508 13.7365 58.0706 29.4936 58.0706C35.9226 58.0706 41.8452 55.9146 46.6181 52.3234L58.2001 63.902C58.9862 64.6881 60.0192 65.0834 61.051 65.0834C62.0827 65.0834 63.1158 64.6881 63.9019 63.902C65.4783 62.3256 65.4782 59.7765 63.9019 58.2001L52.3234 46.6182C55.9145 41.8453 58.0705 35.9226 58.0705 29.4937C58.0705 13.7365 45.2507 0.916687 29.4936 0.916687ZM8.98129 29.4937C8.98129 18.1815 18.1815 8.98135 29.4936 8.98135C40.8057 8.98135 50.0059 18.1815 50.0059 29.4937C50.0059 40.8058 40.8057 50.006 29.4936 50.006C18.1815 50.006 8.98129 40.8058 8.98129 29.4937Z'
          fill='currentColor'
        />
      </svg>
      <p className={styles['initial-screen-title']}>
        Start with searching <br />a GitHub user
      </p>
    </div>
  );
};
