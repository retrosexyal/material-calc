import React from 'react';
import {
  StyleMaterialContainer,
  StyledButton,
  StyledPopUpContent,
  StyledPopUpHeader,
  StyledPopUpWrapper,
} from './styled';
import { useAppSelector } from '../../store';
import MaterialCard from '../materialCard';

import { useAppPopUpHandler } from '../hooks/useAppPopUpHandler';
import { useAppSort } from '../hooks/useAppSort';
import { useAppSearch } from '../hooks/useAppSearch';
import { sortOptions } from '../../constants/constants';

interface PopUpProps {
  type: string;
}

const PopUp: React.FC<PopUpProps> = ({ type }) => {
  const { data, isLoading } = useAppSelector((state) => state.data);
  const { list, pipe } = useAppSelector((state) => state.material);
  const { isActive, handleClick, handlePropagation } = useAppPopUpHandler({ list, pipe });
  const { handleSort, sortedData } = useAppSort(data);
  const { searchValue, searchData, handleSearch } = useAppSearch(sortedData);

  return (
    <div>
      <StyledButton onClick={handleClick}>
        {type === 'list' ? list?.name || 'выберите материал' : pipe?.name || 'выберите трубу'}
      </StyledButton>
      {isActive && (
        <StyledPopUpWrapper onClick={handleClick}>
          <StyledPopUpContent onClick={handlePropagation}>
            <StyledPopUpHeader>
              <select onChange={handleSort}>
                {sortOptions.map((e) => (
                  <option value={e.value}>{e.text}</option>
                ))}
              </select>
              <input type="text" placeholder="поиск материала" value={searchValue} onChange={handleSearch} />
            </StyledPopUpHeader>
            <StyleMaterialContainer>
              {!isLoading &&
                searchData.map((e) => {
                  if (e.type === type) {
                    return <MaterialCard key={e.name} data={e} />;
                  }
                })}
            </StyleMaterialContainer>
          </StyledPopUpContent>
        </StyledPopUpWrapper>
      )}
    </div>
  );
};

export default PopUp;
