import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  size: {
    length: '',
    width: '',
  },
};

interface IPayload {
  key: string;
  value: string;
}

export const sizeSlice = createSlice({
  name: 'size',
  initialState,
  reducers: {
    setSize(state, action: PayloadAction<IPayload>) {
      const { key, value } = action.payload;
      state.size = {
        ...state.size,
        [key]: value,
      };
    },
  },
});

export const { setSize } = sizeSlice.actions;

export const sizeReducer = sizeSlice.reducer;
