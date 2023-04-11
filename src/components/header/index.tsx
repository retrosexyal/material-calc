import React from 'react';

import { ReactComponent as Home } from '../../assets/svg/home.svg';
import { ReactComponent as Basket } from '../../assets/svg/basket.svg';
import { StyledH1, StyledHeader, StyledNavLink } from './styled';
import { Link } from 'react-router-dom';
import { routes } from '../../constants/routes';

const Header = () => {
  return (
    <StyledHeader>
      <StyledNavLink to={routes.MAIN}>
        <Home />
      </StyledNavLink>
      <StyledH1>Калькулятор расчета каркаса с покрытием листов</StyledH1>
      <StyledNavLink to={routes.BASKET}>
        <Basket />
      </StyledNavLink>
    </StyledHeader>
  );
};

export default Header;
