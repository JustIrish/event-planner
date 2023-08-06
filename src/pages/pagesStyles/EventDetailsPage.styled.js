import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const Wrap = styled.div`
  ${mediaQueries('desktop')`
  width: 628px;
  margin: 0 auto;`};
`;
