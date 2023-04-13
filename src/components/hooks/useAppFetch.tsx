import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchData } from '../../store/slices/dataSlice';
import { fetchConfig } from '../../store/slices/configSlice';
import { CalculationResult, IState } from '../../interfaces';

export const useAppFetch = () => {
  const dispatch = useAppDispatch();
  const { config } = useAppSelector((state) => state.config);
  const { list, pipe } = useAppSelector((state) => state.material);
  const { length, width } = useAppSelector((state) => state.size.size);
  const { frame } = useAppSelector((state) => state.frame);

  const { data, isLoading: isDataLoading } = useAppSelector((state) => state.data);
  const [configTyped, setConfigTyped] = useState<IState>({});

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchConfig());
  }, [dispatch]);
  useEffect(() => {
    const lengthConfig = config.find((e) => e.key === 'length');
    const widthConfig = config.find((e) => e.key === 'width');
    const frameConfig = config.filter((e) => e.type === 'frame');
    setConfigTyped({ lengthConfig, widthConfig, frameConfig });
  }, [config]);
  return { configTyped, data, isDataLoading, config, list, pipe, length, width, frame };
};
