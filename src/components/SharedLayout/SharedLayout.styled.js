import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const Layout = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 24px 0;
  background-color: #fefcff;
  border-bottom: 1px solid #7b61ff;

  ${mediaQueries('tablet')`
    padding: 26px 0 18px;`};

  ${mediaQueries('desktop')`
    padding: 22px 0;`};
`;

export const FlexWrap = styled.div`
  ${mediaQueries('tablet')`
    display: flex;
     align-items: center;
    justify-content: space-between;`};
`;

export const HeaderTitle = styled.div`
  color: #7b61ff;
  font-family: 'Alata';
  font-size: 24px;
  line-height: normal;
`;

export const Main = styled.main`
  padding: 40px 0;

  ${mediaQueries('tablet')`
    padding: 40px 0 125px;`};

  ${mediaQueries('desktop')`
    padding: 60px 0 77px;`};
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  ${mediaQueries('mobile')`
    max-width: 320px;
    padding: 0 24px;`};

  ${mediaQueries('tablet')`
  max-width: 768px;
    padding: 0 40px;`};

  ${mediaQueries('desktop')`
    max-width: 1280px;
    padding: 0 80px;`};
`;
