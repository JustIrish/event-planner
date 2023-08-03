import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const MainTitleStyled = styled.h1`
  ${mediaQueries('tablet')`
  color: #3f3f3f;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
  `}
`;
