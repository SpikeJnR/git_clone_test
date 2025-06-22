import { Fragment } from 'react';
import UserInfo from '../../entities/user/ui/User-info';
import MemoizedUserRepositories from '../../entities/user/ui/User-repositories';

export const MainScreen = () => {
  return (
    <Fragment>
      <UserInfo />
      <MemoizedUserRepositories />
    </Fragment>
  );
};
