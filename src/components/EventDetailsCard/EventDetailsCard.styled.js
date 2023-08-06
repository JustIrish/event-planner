import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const StyledCard = styled.div`
  width: 100%;
  margin-top: 24px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border-radius: 12px;
  background-color: #fff;

  button {
    min-width: 110px;
    padding: 8px 16px;
    font-size: 12px;
  }

  a {
    min-width: 110px;
    padding: 8px 16px;
    color: #7b61ff;
    background-color: #fff;
    border-color: #7b61ff;
    font-size: 12px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 168px;
  object-fit: cover;
  border-radius: 8px;
`;

export const DescWrap = styled.div`
  padding: 24px 16px 40px;
`;

export const DescText = styled.p`
  color: #49454f;

  font-size: 14px;
  font-weight: 400;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
`;

export const StyledText = styled.div`
  padding: 12px;
  border-radius: 8px;
  box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);

  font-size: 14px;
  font-weight: 400;
  line-height: 1.71;
  color: #7b61ff;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  ${mediaQueries('tablet')`
  justify-content: flex-end;
  gap: 12px;
  `};
`;
