import { NameSpace } from '../../../config/const.ts';
import { combineReducers } from '@reduxjs/toolkit';
import UserSlice from './User-slice.ts';

export const rootReducers = combineReducers({
  [NameSpace.USER]: UserSlice,
});
