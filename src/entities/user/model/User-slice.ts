import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../config/const.ts';
import { fetchUser, fetchUserRepo } from './User-api-actions.ts';

interface User {
  avatar_url: string;
  name: string;
  html_url: string;
  login: string;
  followers: number;
  following: number;
}

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
}

interface SearchState {
  user: User | null;
  repos: Repo[];
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  user: null,
  repos: [],
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
      .addCase(fetchUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, state => {
        state.loading = false;
        state.error = 'Search error';
      })

      //fetchUserRepo
      .addCase(fetchUserRepo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserRepo.fulfilled, (state, action) => {
        state.loading = false;
        state.repos = action.payload;
      })
      .addCase(fetchUserRepo.rejected, state => {
        state.loading = false;
        state.error = 'Repo fetch error';
      });
  },
});

export default UserSlice.reducer;
