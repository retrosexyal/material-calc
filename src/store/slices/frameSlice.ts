import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IConfig } from '../../interfaces';

interface IFrame {
  type: string;
  key: string;
  name: string;
  step?: number | undefined;
}

const initialState: { frame: IFrame } = {
  frame: {
    type: '',
    key: '',
    name: '',
    step: undefined,
  },
};

export const frameSlice = createSlice({
  name: 'frame',
  initialState,
  reducers: {
    setFrame(state, action: PayloadAction<IConfig>) {
      state.frame = action.payload;
    },
  },
});

export const { setFrame } = frameSlice.actions;

export const frameReducer = frameSlice.reducer;
