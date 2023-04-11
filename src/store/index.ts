import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { dataReducer } from './slices/dataSlice';
import { configReducer } from './slices/configSlice';
import { frameReducer } from './slices/frameSlice';
import { materialReducer } from './slices/materialSlice';
import { sizeReducer } from './slices/sizeSlice';
import { basketReducer } from './slices/basketSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    frame: frameReducer,
    material: materialReducer,
    config: configReducer,
    size: sizeReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
