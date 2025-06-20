import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../config/const.ts';
import { fetchUser } from './User-api-actions.ts';

interface User {
  avatar_url: string;
  name: string;
  html_url: string;
  login: string;
  followers: number;
  following: number;
}

interface SearchState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  user: null,
  loading: false,
  error: null,
};

const UserSlice = createSlice({
  name: NameSpace.USER,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      //fetchUser
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loading = false;
        state.error = 'Search error';
      });
  }
});

export default UserSlice.reducer;