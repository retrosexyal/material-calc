import React, { useEffect } from 'react';
import { IConfig } from '../../interfaces';
import { StyledInput } from './styled';
import { useAppDispatch } from '../../store';
import { setSize } from '../../store/slices/sizeSlice';

interface InputProps {
  config: IConfig;
}

const Input: React.FC<InputProps> = ({ config }) => {
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = config.key;
    const value = e.target.value;
    dispatch(setSize({ key, value }));
  };

  return (
    <StyledInput
      type="number"
      min={config.min}
      max={config.max}
      step={config.step}
      placeholder={config.name}
      required
      data-id={config.name}
      onChange={handleChange}
    />
  );
};

export default Input;
