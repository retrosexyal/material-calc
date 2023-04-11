import React from 'react';
import { useAppSelector } from '../../store';
import ResultContainer from '../../components/resultContainer';
import { StyledBasket } from './styled';

const Basket = () => {
  const { list, pipe, fix, square, cell } = useAppSelector((state) => state.basket.basket);

  return (
    <StyledBasket>
      {square ? (
        <ResultContainer
          listName={list.list}
          listCost={list.cost}
          listCount={list.count}
          pipeName={pipe.pipe}
          pipeCount={pipe.count}
          pipeCost={pipe.cost}
          fixCost={fix.cost}
          fixCount={fix.count}
          square={square}
          cell={cell}
        />
      ) : (
        <h2>Корзина пуста</h2>
      )}
    </StyledBasket>
  );
};

export default Basket;
