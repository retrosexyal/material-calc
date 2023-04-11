import styled from 'styled-components';
import { Media, Padding } from '../../constants/stylesConst';
export const StyledMain = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const StyledHr = styled.hr`
  width: calc(100vw - ${Padding.Large});
  background: #171d26;
  height: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  @media (${Media.Mobile}) {
    width: calc(100vw - ${Padding.Small});
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled.button`
  padding: 3px 10px;
  border-radius: 15px;
  border-color: #d24d57;
  transition: background 0.3s ease-in-out;
  background: inherit;
  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 5px rgba(0, 0, 255, 0.2);
    transition: background 0.3s ease-in-out;
    background: #d24d57;
  }
`;
