import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import axios from 'axios';
import { CONFIG } from '../../constants/constants';
import { IConfig, IConfigState } from '../../interfaces';

const initialState: IConfigState = {
  config: [],
  isLoading: false,
  error: null,
};

export const fetchConfig = createAsyncThunk('fetchConfig', async () => {
  const response = await axios.get(CONFIG);
  return response.data as IConfig[];
});

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IConfigState>) => {
    builder
      .addCase(fetchConfig.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchConfig.fulfilled, (state, action: PayloadAction<IConfig[]>) => {
        state.isLoading = false;
        state.config = action.payload;
      })
      .addCase(fetchConfig.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Error fetching data';
      });
  },
});

export const configReducer = configSlice.reducer;
