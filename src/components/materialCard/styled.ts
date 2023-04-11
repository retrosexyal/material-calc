import styled from 'styled-components';

export const StyledCard = styled.div`
  border: 1px solid black;
  display: flex;
  width: 100%;
  padding: 5px;
  justify-content: space-between;
  transition: transform 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background: #b03f35;
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
`;
