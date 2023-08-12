import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const TitleWrap = styled.div`
  ${mediaQueries('desktop')`
 display: flex;
 flex-direction: row-reverse;
 align-items: center;
 justify-content: space-between;

 h1{
    margin: 0;
 }
 `};
`;
