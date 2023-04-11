import { createGlobalStyle } from 'styled-components';
import { Media } from '../constants/stylesConst';

export const Global = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-size: 20px;
       font-family: 'Open Sans', sans-serif; 

       @media (${Media.Mobile}){
        font-size: 12px;
       }
   }
`;
