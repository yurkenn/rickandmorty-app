import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchEpisodes = createAsyncThunk('episodes/fetchEpisodes', async (page) => {
  const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
  return response.data;
});

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  page: 1,
  hasNextPage: true,
};

export const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = [...state.items, ...action.payload.results];
        state.page = state.page + 1;
        state.hasNextPage = action.payload.info.next !== null;
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectEpisodes = (state) => state.episodes.items;
export const selectEpisodesStatus = (state) => state.episodes.status;
export const selectEpisodesError = (state) => state.episodes.error;

export default episodesSlice.reducer;
