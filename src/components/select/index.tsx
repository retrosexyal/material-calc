import React, { useEffect } from 'react';
import { IConfig } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../store';
import { setFrame } from '../../store/slices/frameSlice';
import { StyledLabel } from './styled';

interface SelectProps {
  frameConfig: IConfig[];
}

const Select: React.FC<SelectProps> = ({ frameConfig }) => {
  const dispatch = useAppDispatch();
  const { frame } = useAppSelector((state) => state.frame);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentFrame = frameConfig.find((frame) => frame.name === e.target.value);
    dispatch(setFrame(currentFrame!));
  };

  useEffect(() => {
    if (!frame.type) {
      const firstFrame = frameConfig.find((frame) => frame.type === 'frame');
      dispatch(setFrame(firstFrame!));
    }
  }),
    [];

  return (
    <StyledLabel>
      Выберите прочность
      <select onChange={handleChange}>
        {frameConfig.map((e) => {
          return <option key={e.key}>{e.name}</option>;
        })}
      </select>
    </StyledLabel>
  );
};

export default Select;
