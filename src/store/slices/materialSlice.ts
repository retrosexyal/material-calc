import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IData, IMaterialState } from '../../interfaces';

const initialState: IMaterialState = {
  list: null,
  pipe: null,
  fix: null,
};

export const materialSlice = createSlice({
  name: 'material',
  initialState,
  reducers: {
    setMaterial(state, action: PayloadAction<IData>) {
      const { payload } = action;
      if (payload.type === 'list') {
        state.list = payload;
      }
      if (payload.type === 'pipe') {
        state.pipe = payload;
      }
      if (payload.type === 'fix') {
        state.fix = payload;
      }
    },
  },
});

export const { setMaterial } = materialSlice.actions;

export const materialReducer = materialSlice.reducer;
