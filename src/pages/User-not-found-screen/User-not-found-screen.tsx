import styles from './User-not-found-screen.module.css';

export const UserNotFoundScreen = () => {
  return (
    <div className={styles['not-found-wrapper']}>
      <svg
        width='65'
        height='75'
        viewBox='0 0 65 75'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M23 18.5C23 13.2533 27.2533 9 32.5 9C37.7467 9 42 13.2533 42 18.5C42 23.7467 37.7467 28 32.5 28C27.2533 28 23 23.7467 23 18.5ZM32.5 0C22.2827 0 14 8.28273 14 18.5C14 28.7173 22.2827 37 32.5 37C42.7173 37 51 28.7173 51 18.5C51 8.28273 42.7173 0 32.5 0ZM9 70.5C9 57.5213 19.5213 47 32.5 47C45.4787 47 56 57.5213 56 70.5C56 72.9853 58.0147 75 60.5 75C62.9853 75 65 72.9853 65 70.5C65 52.5507 50.4493 38 32.5 38C14.5507 38 0 52.5507 0 70.5C0 72.9853 2.01472 75 4.5 75C6.98528 75 9 72.9853 9 70.5Z'
          fill='currentColor'
        />
      </svg>
      <p className={styles['not-found-title']}>User not found</p>
    </div>
  );
};
