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
  loadingUser: boolean;
  loadingRepos: boolean;
  errorUser: boolean;
  page: number;
}

const initialState: SearchState = {
  user: null,
  repos: [],
  loadingUser: false,
  loadingRepos: false,
  errorUser: false,
  page: 1,
};

const UserSlice = createSlice({
  name: NameSpace.USER,
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setUserError: (state, action: PayloadAction<boolean>) => {
      state.errorUser = action.payload;
    },
    resetUserData: (state) => {
      state.user = null;
      state.repos = [];
      state.errorUser = false;
      state.loadingUser = false;
      state.loadingRepos = false;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loadingUser = true;
        state.errorUser = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loadingUser = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loadingUser = false;
        state.errorUser = true;
      })

      .addCase(fetchUserRepo.pending, (state) => {
        state.loadingRepos = true;
        state.errorUser = false;
      })
      .addCase(fetchUserRepo.fulfilled, (state, action) => {
        state.loadingRepos = false;
        state.repos = action.payload;
      })
      .addCase(fetchUserRepo.rejected, (state) => {
        state.loadingRepos = false;
        state.errorUser = true;
      });
  },
});


export const { setCurrentPage, setUserError, resetUserData } = UserSlice.actions;
export default UserSlice.reducer;
