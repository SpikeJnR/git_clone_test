import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('user/fetchUser', async (query: string) => {
  const response = await axios.get(`https://api.github.com/users/${query}`);
  return response.data;
});

export const fetchUserRepo = createAsyncThunk('user/fetchUserRepo', async (link: string) => {
  const response = await axios.get(link);
  return response.data;
})