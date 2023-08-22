import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;

  a {
    width: 56px;
    height: 56px;
    padding: 16px;

    ${mediaQueries('tablet')`
     min-width: 193px;`};
  }
`;

export const BtnWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  min-width: 56px;
  height: 56px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  font-size: 16px;
  font-weight: 500;
  color: #3f3f3f;

  .react-select-container {
    display: none;
  }

  ${mediaQueries('tablet')`
     padding-right: 50px;`};

  svg {
    position: absolute;
    z-index: 9;
    right: 16px;
    top: 16px;
  }

  &:focus,
  &:hover,
  &:active {
    .react-select-container {
      display: block;
      position: absolute;
      z-index: 10;
      ${p => (p.filter === 'filter' ? 'left: 0' : 'right: 0')};
      width: 155px;
    }
  }
`;
