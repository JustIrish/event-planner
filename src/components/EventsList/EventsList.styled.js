import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 40px 0;

  ${mediaQueries('tablet')`
    padding: 24px 0 40px;`};

  ${mediaQueries('desktop')`
   column-gap: 24px;
    row-gap: 40px;
    padding: 40px 0 32px;`};
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border-radius: 12px;

  ${mediaQueries('tablet')`
     flex-basis: calc((100% - 24px) / 2);`};

  ${mediaQueries('desktop')`
  flex-basis: calc((100% - 72px) / 4);`};
`;

export const Image = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const FlexWrap = styled.div`
  position: absolute;
  width: 100%;
  top: 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const TextInfo = styled.p`
  color: #7b61ff;
  font-size: 14px;
  line-height: 1.71;
`;

export const PositionWrap = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Mark = styled.p`
  padding: 6px 12px;
  border-radius: 8px;
  background-color: #fff;
  color: #7b61ff;
  font-size: 14px;
  font-weight: 500;
`;

export const DescWrap = styled.div`
  padding: 16px;
`;

export const Title = styled.h2`
  color: #1c1b1f;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const DescText = styled.p`
  color: #49454f;
  font-size: 14px;
  background-color: #fff;
`;
