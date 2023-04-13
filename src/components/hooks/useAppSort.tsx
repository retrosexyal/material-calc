import { useState } from 'react';
import { IData } from '../../interfaces';

interface ISortData {
  name: keyof IData;
  sortChar: number;
}

export const useAppSort = (data: IData[]) => {
  const [sort, setSort] = useState<ISortData>({ name: 'price', sortChar: 1 });
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortName = e.target.value.split(' ')[0];
    const char = +e.target.value.split(' ')[1] || 1;
    setSort({ name: sortName as keyof IData, sortChar: char });
  };
  const sortedData = [...data].sort((a, b) => (a[sort.name]! > b[sort.name]! ? sort.sortChar : -sort.sortChar));

  return { handleSort, sortedData };
};
