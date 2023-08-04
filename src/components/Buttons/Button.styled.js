import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBtn = styled(Link)`
  border-radius: 8px;
  border: transparent;
  color: #fff;
  cursor: pointer;

  font-weight: 500;
  background-color: #7b61ff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  transition-property: background-color;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #6243ff;
  }
`;
