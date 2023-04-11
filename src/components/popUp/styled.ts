import styled, { keyframes } from 'styled-components';

export const StyledPopUpWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`;

const fadeAndSlideIn = keyframes`
0% {
  opacity: 0; 
  transform: translateY(-100px); 
}
100% {
  opacity: 1; 
  transform: translateY(0); 
}
`;

export const StyledPopUpContent = styled.div`
  min-width: 50%;
  max-width: 90%;
  max-height: 90%;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  opacity: 0;
  transform: translateY(-100px);
  animation-name: ${fadeAndSlideIn};
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

export const StyledButton = styled.button`
  width: 30vw;
  padding: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyleMaterialContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  gap: 5px;
  padding: 20px;
  width: 70%;
`;

export const StyledPopUpHeader = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
`;
