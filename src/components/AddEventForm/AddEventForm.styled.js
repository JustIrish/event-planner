import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const StyledForm = styled.form`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  padding: 40px 16px;
  margin-top: 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  button {
    padding: 16px 12px;
    margin-top: 20px;

    ${mediaQueries('tablet')`
    position: absolute;
    right: 24px;
    bottom: 40px;
    margin-top: 0;
    width: 193px;`};

    ${mediaQueries('desktop')`
    right: 40px;
    bottom: 54px;
    margin-top: 0;`};
  }

  ${mediaQueries('tablet')`
  padding: 40px 24px;
  height: 656px;
  grid-template-columns: repeat(2, 308px);
  grid-auto-flow: column;
   grid-template-rows: repeat(5, 80px);
  align-items: flex-start;
  `};

  ${mediaQueries('desktop')`
  height: 490px;
  padding: 40px;
  grid-template-columns: repeat(3, 332px);
   grid-template-rows: repeat(3, 80px);
  `};
`;

export const LabelStyled = styled.label`
  color: #7b61ff;

  font-size: 16px;
  font-weight: 400;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 16px 12px;
  color: #3f3f3f;

  font-size: 16px;
  font-weight: 400;

  border-radius: 8px;
  border: 1px solid #aca7c3;
  transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

  appearance: none;
  cursor: pointer;

  &:focus,
  &:hover {
    color: #7b61ff;
    outline: 1px solid #7b61ff;
  }
`;

export const TextareaStyled = styled.textarea`
  width: 100%;
  height: 153px;
  padding: 16px 12px;
  color: #3f3f3f;

  font-size: 16px;
  font-weight: 400;

  border-radius: 8px;
  border: 1px solid #aca7c3;
  transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  resize: none;
  cursor: pointer;

  &:focus,
  &:hover {
    color: #7b61ff;
    outline: 1px solid #7b61ff;
  }
`;

export const SelectStyled = styled.select`
  width: 100%;

  padding: 16px 35px 16px 12px;
  color: #3f3f3f;

  font-size: 16px;
  font-weight: 400;

  border-radius: 8px;
  border: 1px solid #aca7c3;
  transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

  appearance: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #7b61ff;
    outline: 1px solid #7b61ff;
  }
`;

export const ErrorStyled = styled.div`
  margin-top: 4px;
  padding: 0 15px;
  color: #ff2b77;
  text-align: right;
  font-size: 12px;
  line-height: 1.3;
`;

export const SelectWrap = styled.div`
  position: relative;
  margin-top: 8px;

  svg {
    position: absolute;
    right: 15px;
    top: 15px;

    pointer-events: none;

    transition: 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;
