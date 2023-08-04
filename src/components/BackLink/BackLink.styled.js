import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 25px;
  color: #7b61ff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

  :hover {
    color: #6243ff;
  }
`;
