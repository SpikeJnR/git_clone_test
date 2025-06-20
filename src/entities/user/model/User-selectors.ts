import type { RootState } from './store.ts';
import { NameSpace } from '../../../config/const.ts';

export const getUserData = (state: RootState) => state[NameSpace.USER]?.user;