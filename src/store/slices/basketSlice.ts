import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  basket: {
    list: {
      list: '',
      count: 0,
      cost: 0,
    },
    fix: {
      count: 0,
      cost: 0,
    },
    pipe: {
      pipe: '',
      count: 0,
      cost: 0,
    },
    square: 0,
    cell: '',
  },
};

interface IPayload {
  list: string;
  pipe: string;
  listCount: number;
  pipeCount: number;
  fixCount: number;
  fixCost: number;
  pipeCost: number;
  listCost: number;
  square: number;
  cell: string;
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasket(state, action: PayloadAction<IPayload>) {
      const { list, pipe, listCount, pipeCount, fixCount, fixCost, pipeCost, listCost, square, cell } = action.payload;
      const newItem = {
        list: {
          list: list,
          count: listCount,
          cost: listCost,
        },
        fix: {
          count: fixCount,
          cost: fixCost,
        },
        pipe: {
          pipe: pipe,
          count: pipeCount,
          cost: pipeCost,
        },
        square: square,
        cell: cell,
      };
      state.basket = newItem;
    },
  },
});

export const { setBasket } = basketSlice.actions;

export const basketReducer = basketSlice.reducer;
