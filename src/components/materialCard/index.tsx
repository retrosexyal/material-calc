import React from 'react';
import { StyledCard } from './styled';
import { IData } from '../../interfaces';
import { useAppDispatch } from '../../store';
import { setMaterial } from '../../store/slices/materialSlice';

interface MaterialCardProps {
  data: IData;
}

function MaterialCard({ data }: MaterialCardProps) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setMaterial(data));
  };
  return (
    <>
      {data ? (
        <StyledCard onClick={handleClick}>
          <div>{`${data.name} ${data.material ? `(${data.material})` : ''}`}</div>
          <div>{`${data.price} У.Е.`}</div>
        </StyledCard>
      ) : (
        <div>Загрузка данных</div>
      )}
    </>
  );
}

export default MaterialCard;
