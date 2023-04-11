import React from 'react';
import { StyledTd, StyledTh, StyledWrapper } from './styled';

const ResultContainer = ({
  listName = 'Выберите лист',
  pipeName = 'Выберите трубу',
  listCount = 0,
  listCost = 0,
  pipeCount = 0,
  pipeCost = 0,
  fixCount = 0,
  fixCost = 0,
  square = 0,
  cell = ' ',
}) => {
  return (
    <StyledWrapper>
      <div>
        {square ? (
          <div>
            площадь изделия = {square} м<sup>2</sup> <br />
            ячейка = {cell}
          </div>
        ) : (
          ''
        )}
      </div>
      <table>
        <thead>
          <tr>
            <StyledTh>Наименование</StyledTh>
            <StyledTh>ед.</StyledTh>
            <StyledTh>кол-во</StyledTh>
            <StyledTh>сумма</StyledTh>
          </tr>
        </thead>
        <tbody>
          <tr>
            <StyledTd>{listName}</StyledTd>
            <StyledTd>м2</StyledTd>
            <StyledTd>{listCount}</StyledTd>
            <StyledTd>{listCost}</StyledTd>
          </tr>
          <tr>
            <StyledTd>{pipeName}</StyledTd>
            <StyledTd>мп</StyledTd>
            <StyledTd>{pipeCount}</StyledTd>
            <StyledTd>{pipeCost}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Саморез</StyledTd>
            <StyledTd>шт</StyledTd>
            <StyledTd>{fixCount}</StyledTd>
            <StyledTd>{fixCost}</StyledTd>
          </tr>
          <tr>
            <StyledTd>Всего</StyledTd>
            <StyledTd>У. Е.</StyledTd>
            <StyledTd>-</StyledTd>
            <StyledTd>{(fixCost + pipeCost + listCost).toFixed(2)}</StyledTd>
          </tr>
        </tbody>
      </table>
    </StyledWrapper>
  );
};

export default ResultContainer;
