import React, { useEffect, useState } from 'react';
import {
  StyleMaterialContainer,
  StyledButton,
  StyledPopUpContent,
  StyledPopUpHeader,
  StyledPopUpWrapper,
} from './styled';
import { useAppSelector } from '../../store';
import MaterialCard from '../materialCard';
import { IData } from '../../interfaces';

interface PopUpProps {
  type: string;
}
interface SortData {
  name: keyof IData;
  char: number;
}

const PopUp: React.FC<PopUpProps> = ({ type }) => {
  const [isActive, setIsActive] = useState(false);
  const [sort, setSort] = useState<SortData>({ name: 'price', char: 1 });
  const [searchValue, setSearchValue] = useState('');
  const { data, isLoading } = useAppSelector((state) => state.data);
  const { list, pipe } = useAppSelector((state) => state.material);

  const handleClick = (e: React.MouseEvent) => {
    setIsActive((prev) => !prev);
  };
  const handlePropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  useEffect(() => {
    setIsActive(false);
  }, [list, pipe]);

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortName = e.target.value.split(' ')[0];
    const char = +e.target.value.split(' ')[1] || 1;
    setSort({ name: sortName as keyof IData, char: char });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

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
                <option value="price 1">Цена по возрастанию</option>
                <option value="price -1">Цена по убыванию</option>
                <option value="width 1">Ширина по возрастанию</option>
                <option value="width -1">Ширина по убыванию</option>
                <option value="material">Материал</option>
              </select>
              <input type="text" placeholder="поиск материала" value={searchValue} onChange={handleSearch} />
            </StyledPopUpHeader>
            <StyleMaterialContainer>
              {!isLoading &&
                [...data]
                  .sort((a, b) => (a[sort.name]! > b[sort.name]! ? sort.char : -sort.char))
                  .filter((e) => (e.name + e.material + e.price).toLowerCase().includes(searchValue.toLowerCase()))
                  .map((e) => {
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
