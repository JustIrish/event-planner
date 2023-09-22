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
  position: relative;
  ${mediaQueries('tablet')`
    display: flex;
     align-items: center;
    justify-content: space-between;
    padding-right: 93px;`};
`;

export const HeaderTitle = styled.div`
  color: #7b61ff;
  font-family: 'Alata';
  font-size: 24px;
  line-height: normal;
`;
export const SelectStyled = styled.select`
  width: 69px;
  height: 48px;

  padding: 12px 33px 12px 12px;
  color: #3f3f3f;
  background-color: #fff;

  font-size: 16px;
  font-weight: 500;

  border-radius: 8px;
  border-color: transparent;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  appearance: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #7b61ff;
    outline: 1px solid #7b61ff;
  }
`;

export const SelectWrap = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  svg {
    position: absolute;
    right: 4px;
    top: 12px;

    pointer-events: none;
  }
`;

export const Main = styled.main`
  padding: 40px 0;

  ${mediaQueries('tablet')`
    padding: 40px 0 125px;
   `};

  ${mediaQueries('desktop')`
    padding: 60px 0 77px;
    `};
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
    max-width: 1440px;
    padding: 0 80px;`};
`;
