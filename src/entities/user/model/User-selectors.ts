import type { RootState } from './store.ts';
import { NameSpace } from '../../../config/const.ts';

export const getUserData = (state: RootState) => state[NameSpace.USER]?.user;
export const getUserRepo = (state: RootState) => state[NameSpace.USER]?.repos;
export const getCurrentPage = (state: RootState) => state[NameSpace.USER]?.page;
export const getUserError = (state: RootState) => state[NameSpace.USER]?.errorUser;
export const getDataLoading = (state: RootState) =>
  state[NameSpace.USER].loadingUser || state[NameSpace.USER].loadingRepos;