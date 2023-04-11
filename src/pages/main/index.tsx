import React, { useEffect, useState } from 'react';
import { fetchData } from '../../store/slices/dataSlice';
import { useAppDispatch, useAppSelector } from '../../store';
import PopUp from '../../components/popUp';
import Input from '../../components/input';
import { fetchConfig } from '../../store/slices/configSlice';
import { CalculationResult, IConfig, IState } from '../../interfaces';
import Select from '../../components/select';
import { calculate } from '../../utils/calculate';
import ResultContainer from '../../components/resultContainer';
import { StyledButton, StyledButtonContainer, StyledForm, StyledHr, StyledMain } from './styled';
import { setBasket } from '../../store/slices/basketSlice';

function Main() {
  const [configTyped, setConfigTyped] = useState<IState>({});
  const [result, setResult] = useState<CalculationResult>();

  const dispatch = useAppDispatch();
  const { config, isLoading } = useAppSelector((state) => state.config);
  const { list, pipe } = useAppSelector((state) => state.material);
  const { length, width } = useAppSelector((state) => state.size.size);
  const { frame } = useAppSelector((state) => state.frame);
  const { data } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchConfig());
  }, [dispatch]);

  useEffect(() => {
    const lengthConfig = config.find((e) => e.key === 'length') || undefined;
    const widthConfig = config.find((e) => e.key === 'width') || undefined;
    const frameConfig = config.filter((e) => e.type === 'frame') || undefined;
    setConfigTyped({ lengthConfig, widthConfig, frameConfig });
  }, [isLoading]);

  const handleCalc = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (form.checkValidity() && list && pipe) {
      const key = list?.material;
      const val = config.find((e) => {
        return e.key === key && e.value;
      })?.value;
      const fixPrice = data.find((e) => e.type === 'fix')?.price;
      console.log('Form submitted');
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

  return (
    <StyledMain>
      {configTyped.lengthConfig && configTyped.widthConfig && configTyped.frameConfig ? (
        <>
          <PopUp type="list" />
          <PopUp type="pipe" />
          <StyledForm onSubmit={handleCalc}>
            <Input config={configTyped.lengthConfig} />
            <Input config={configTyped.widthConfig} />
            <Select frameConfig={configTyped.frameConfig} />
            <StyledButtonContainer>
              <StyledButton type="submit">Рассчитать</StyledButton>
              <StyledButton type="button" onClick={handleBasket}>
                Добавить в корзину
              </StyledButton>
            </StyledButtonContainer>
          </StyledForm>
        </>
      ) : (
        <h2>Загрузка данных...</h2>
      )}
      <StyledHr />
      <ResultContainer
        listName={list?.name}
        pipeName={pipe?.name}
        listCount={result?.list}
        pipeCount={result?.pipe}
        fixCount={result?.fix}
        square={result?.square}
        cell={result?.cell}
        listCost={result?.listCost}
        pipeCost={result?.pipeCost}
        fixCost={result?.fixCost}
      />
    </StyledMain>
  );
}

export default Main;
