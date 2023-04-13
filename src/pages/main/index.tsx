import React from 'react';
import PopUp from '../../components/popUp';
import Input from '../../components/input';
import Select from '../../components/select';
import ResultContainer from '../../components/resultContainer';

import { StyledButton, StyledButtonContainer, StyledForm, StyledHr, StyledMain } from './styled';

import { useAppFetch } from '../../components/hooks/useAppFetch';
import { useAppCalcAndBasket } from '../../components/hooks/useAppCalcAndBasket';

function Main() {
  const { configTyped, data, isDataLoading, config, list, pipe, length, width, frame } = useAppFetch();
  const { handleBasket, handleCalc, result } = useAppCalcAndBasket({ list, pipe, config, data, length, width, frame });

  return (
    <StyledMain>
      {!isDataLoading && configTyped.lengthConfig && configTyped.widthConfig && configTyped.frameConfig ? (
        <>
          <PopUp type="list" />
          <PopUp type="pipe" />
          <StyledForm onSubmit={handleCalc}>
            <Input config={configTyped.lengthConfig!} />
            <Input config={configTyped.widthConfig!} />
            <Select frameConfig={configTyped.frameConfig!} />
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
