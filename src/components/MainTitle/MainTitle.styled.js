import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const MainTitleStyled = styled.h1`
  font-size: 24px;
  color: #3f3f3f;

  font-weight: 600;
  line-height: normal;

  ${mediaQueries('tablet')`
  font-size: 32px; 
  `}
`;
