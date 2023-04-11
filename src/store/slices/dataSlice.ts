import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import axios from 'axios';
import { DATA } from '../../constants/constants';
import { IData, IDataState } from '../../interfaces';

const initialState: IDataState = {
  data: [],
  isLoading: false,
  error: null,
};

export const fetchData = createAsyncThunk('fetchData', async () => {
  const response = await axios.get(DATA);
  return response.data as IData[];
});

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IDataState>) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<IData[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Error fetching data';
      });
  },
});

export const dataReducer = dataSlice.reducer;
