import { useState } from 'react';
import { useAppDispatch } from '../../store';
import { CalculationResult, IConfig, IData } from '../../interfaces';
import { setBasket } from '../../store/slices/basketSlice';
import { calculate } from '../../utils/calculate';

interface IUseAppCalcAndBasketProps {
  list: IData | null;
  pipe: IData | null;
  config: IConfig[];
  data: IData[];
  length: string;
  width: string;
  frame: IConfig;
}

export const useAppCalcAndBasket = ({ list, pipe, config, data, length, width, frame }: IUseAppCalcAndBasketProps) => {
  const dispatch = useAppDispatch();
  const [result, setResult] = useState<CalculationResult>();

  const handleCalc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (form.checkValidity() && list && pipe) {
      const key = list?.material;
      const val = config.find((e) => {
        return e.key === key && e.value;
      })?.value;
      const fixPrice = data.find((e) => e.type === 'fix')?.price;
      setResult(
        calculate(length, width, list?.width!, frame.step!, pipe?.width!, val!, list?.price!, pipe?.price!, fixPrice!)
      );
    } else {
      alert('выберите комплектацию');
    }
  };

  const handleBasket = () => {
    dispatch(
      setBasket({
        list: list?.name!,
        pipe: pipe?.name!,
        listCount: result?.list!,
        pipeCount: result?.pipe!,
        fixCount: result?.fix!,
        fixCost: result?.fixCost!,
        pipeCost: result?.pipeCost!,
        listCost: result?.listCost!,
        square: result?.square!,
        cell: result?.cell!,
      })
    );
  };
  return { handleBasket, handleCalc, result };
};
