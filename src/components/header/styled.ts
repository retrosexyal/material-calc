import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

export const StyledHeader = styled.div`
  background: #171d26;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
export const StyledNavLink = styled(NavLink)`
  fill: #fff;
  &.active {
    fill: #ff0000;
  }
`;

const darkenAnimation = keyframes`
  0% {
    color: #ffffff; 
  }
  50% {
    color: #808080; 
  }
  100% {
    color: #ffffff; 
  }
`;

export const StyledH1 = styled.h1`
  text-align: center;
  color: #ffffff;
  animation: ${darkenAnimation} 10s infinite;
`;
