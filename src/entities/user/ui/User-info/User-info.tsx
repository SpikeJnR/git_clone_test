import { useAppSelector } from '../../model/store.ts';
import { getUserData } from '../../model/User-selectors.ts';
import styles from './User-info.module.css';
import { Link } from 'react-router-dom';

export const UserInfo = () => {
  const user = useAppSelector(getUserData);

  if (!user) {return;}

  return (
    <div className={styles['user-info-wrapper']}>
      <img className={styles['user-image']} src={user.avatar_url} alt='user picture' />
      <p className={styles['user-name']}>{user.name}</p>
      <Link className={styles['user-login']} to={user.html_url}>
        {user.login}
      </Link>
      <section className={styles['section-follower']}>
        <span className={styles['user-followers']}>
          <div className={styles['icon-wrapper']}>
            <svg
              className={styles['user-followers-icon']}
              width='23'
              height='15'
              viewBox='0 0 23 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.028 3.73874C10.028 5.39874 8.69338 6.73874 7.02764 6.73874C5.3619 6.73874 4.01726 5.39874 4.01726 3.73874C4.01726 2.07874 5.3619 0.738739 7.02764 0.738739C8.69338 0.738739 10.028 2.07874 10.028 3.73874ZM18.0557 3.73874C18.0557 5.39874 16.7211 6.73874 15.0553 6.73874C13.3896 6.73874 12.0449 5.39874 12.0449 3.73874C12.0449 2.07874 13.3896 0.738739 15.0553 0.738739C16.7211 0.738739 18.0557 2.07874 18.0557 3.73874ZM7.02764 8.73874C4.68958 8.73874 0.00341797 9.90874 0.00341797 12.2387V13.7387C0.00341797 14.2887 0.454975 14.7387 1.00688 14.7387H13.0484C13.6003 14.7387 14.0519 14.2887 14.0519 13.7387V12.2387C14.0519 9.90874 9.3657 8.73874 7.02764 8.73874ZM14.082 8.78874C14.4332 8.75874 14.7643 8.73874 15.0553 8.73874C17.3934 8.73874 22.0795 9.90874 22.0795 12.2387V13.7387C22.0795 14.2887 21.628 14.7387 21.0761 14.7387H15.8782C15.9885 14.4287 16.0588 14.0887 16.0588 13.7387V12.2387C16.0588 10.7687 15.266 9.65874 14.1221 8.82874C14.1191 8.82571 14.116 8.82177 14.1127 8.81746C14.1051 8.80755 14.096 8.79571 14.082 8.78874Z'
                fill='currentColor'
              />
            </svg>
          </div>
          <span>{user.followers}k followers</span>
        </span>
        <span className={styles['user-following']}>
          <div className={styles['icon-wrapper']}>
            <svg
              className={styles['user-following-icon']}
              width='17'
              height='17'
              viewBox='0 0 17 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.0554 4.73874C12.0554 6.94874 10.2592 8.73874 8.0416 8.73874C5.82395 8.73874 4.02776 6.94874 4.02776 4.73874C4.02776 2.52874 5.82395 0.738739 8.0416 0.738739C10.2592 0.738739 12.0554 2.52874 12.0554 4.73874ZM0.013916 14.7387C0.013916 12.0787 5.36236 10.7387 8.0416 10.7387C10.7208 10.7387 16.0693 12.0787 16.0693 14.7387V15.7387C16.0693 16.2887 15.6177 16.7387 15.0658 16.7387H1.01738C0.465473 16.7387 0.013916 16.2887 0.013916 15.7387V14.7387Z'
                fill='currentColor'
              />
            </svg>
          </div>

          <span>{user.following} following </span>
        </span>
      </section>
    </div>
  );
};
