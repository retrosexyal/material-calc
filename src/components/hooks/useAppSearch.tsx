import { useState } from 'react';
import { IData } from '../../interfaces';

export const useAppSearch = (data: IData[]) => {
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const searchData = data.filter((e) =>
    (e.name + e.material + e.price).toLowerCase().includes(searchValue.toLowerCase())
  );
  return { searchValue, searchData, handleSearch };
};
