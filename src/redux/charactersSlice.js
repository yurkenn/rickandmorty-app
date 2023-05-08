import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async ({ page, name }) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/character?page=${page}&name=${name}`
    );
    return response.data;
  }
);

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  page: 1,
  hasNextPage: true,
  name: '',
};

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.items = [...state.items, ...action.payload.results];
      state.page = state.page + 1;
      state.name = action.payload.name;
      state.status = 'succeeded';
      if (action.payload.info.next === null) {
        state.hasNextPage = false;
      }
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = 'failed';
    });
  },
});

export default characterSlice.reducer;
