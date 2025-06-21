import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../../config/const.ts';
import { fetchUser, fetchUserRepo } from './User-api-actions.ts';

interface User {
  avatar_url: string;
  name: string;
  html_url: string;
  login: string;
  followers: number;
  following: number;
  public_repos: number;
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
  page: number | 0,
}

const initialState: SearchState = {
  user: null,
  repos: [],
  loading: false,
  error: null,
  page: 0,
};

const UserSlice = createSlice({
  name: NameSpace.USER,
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    }
  },
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


export const { setCurrentPage } = UserSlice.actions;
export default UserSlice.reducer;
