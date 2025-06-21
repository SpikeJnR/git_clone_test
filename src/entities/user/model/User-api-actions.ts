import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { REPO_PER_PAGE } from '../../../config/const.ts';

const GITHUB_TOKEN = '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';
const headers = {
  Authorization: `token ${GITHUB_TOKEN}`,
};

export const fetchUser = createAsyncThunk('user/fetchUser', async (query: string) => {
  const response = await axios.get(`https://api.github.com/users/${query}`, {
    headers,
  });
  return response.data;
});


export const fetchUserRepo = createAsyncThunk(
  'user/fetchUserRepo',
  async ({ query, page }: { query: string; page: number }) => {
    const response = await axios.get(`https://api.github.com/users/${query}/repos`, {
      headers,
      params: {
        page,
        per_page: REPO_PER_PAGE,
      },
    });
    return response.data;
  }
);
