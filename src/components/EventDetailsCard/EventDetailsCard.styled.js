import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const StyledCard = styled.div`
  width: 100%;
  margin-top: 24px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border-radius: 12px;
  background-color: #fff;

  ${mediaQueries('desktop')`
  width: 628px;`};

  button,
  a {
    min-width: 110px;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 12px;
    box-shadow: none;
  }

  a {
    color: #7b61ff;
    background-color: #fff;
    border: 1px solid #7b61ff;

    ${mediaQueries('tablet')`
  min-width: 32px;`};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 168px;
  object-fit: cover;
  border-radius: 8px;

  ${mediaQueries('tablet')`
  height: 272px;`};
`;

export const DescWrap = styled.div`
  padding: 24px 16px 40px;

  ${mediaQueries('tablet')`
    padding: 24px 24px 40px;`};

  ${mediaQueries('desktop')`
  padding-right: 40px`};
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

  font-weight: ${prop => (prop.weight === 'bold' ? 500 : 400)};
  line-height: ${prop => (prop.weight === 'bold' ? 1.42 : 1.71)};

  color: ${props => {
    switch (props.type) {
      case 'High':
        return '#FF2B77';

      case 'Medium':
        return '#E2A300';

      case 'Low':
        return '#6BD475';

      default:
        return '#7b61ff';
    }
  }};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  ${mediaQueries('tablet')`
  justify-content: flex-end;
  gap: 16px;
  `};
`;
