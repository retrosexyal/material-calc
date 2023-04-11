import styled from 'styled-components';
import { Media, Padding } from '../constants/stylesConst';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: ${Padding.Large};
  padding-right: ${Padding.Large};

  @media (${Media.Mobile}) {
    padding-right: ${Padding.Small};
    padding-left: ${Padding.Small};
  }
`;
