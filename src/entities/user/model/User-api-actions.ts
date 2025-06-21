import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { REPO_PER_PAGE } from '../../../config/const.ts';

export const fetchUser = createAsyncThunk('user/fetchUser', async (query: string) => {
  const response = await axios.get(`https://api.github.com/users/${query}`);
  return response.data;
});

export const fetchUserRepo = createAsyncThunk(
  'user/fetchUserRepo',
  async ({ query, page }: { query: string; page: number }) => {
    const response = await axios.get(`https://api.github.com/users/${query}/repos`, {
      params: {
        page,
        per_page: REPO_PER_PAGE,
      },
    });
    return response.data;
  }
);