import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const WrapInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 31px;

  ${mediaQueries('tablet')`
    margin-top: 0;`};
`;

export const StyledInput = styled.input`
  width: 100%;

  height: 48px;
  padding: 12px 12px 12px 48px;
  border: transparent;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media screen and (max-width: 767px) {
    max-width: 272px;
  }
  color: #888;
  font-size: 14px;
  font-weight: 300;
  line-height: 1;

  ${mediaQueries('tablet')`
    width: 368px;`};
  ${mediaQueries('desktop')`
    width: 410px;`};

  &:hover,
  &:focus {
    color: #7b61ff;
    outline: transparent;
  }
`;

export const BtnSearch = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 2px;
  background-color: transparent;
  border: transparent;
`;
