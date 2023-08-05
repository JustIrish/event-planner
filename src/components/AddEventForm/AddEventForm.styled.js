import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 16px;
  margin-top: 24px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const LabelStyled = styled.label`
  color: #7b61ff;

  font-size: 16px;
  font-weight: 400;

  /* ${mediaQueries('desktop')`
   margin-bottom: 18px;`}; */
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
  /* ${mediaQueries('desktop')`
   margin-bottom: 18px;`}; */

  &:focus,
  &:hover {
    color: #7b61ff;
    outline: 1px solid #7b61ff;
  }
`;

export const TextareaStyled = styled.textarea`
  width: 100%;
  margin-top: 8px;
  padding: 16px 12px;
  color: #3f3f3f;

  font-size: 16px;
  font-weight: 400;

  border-radius: 8px;
  border: 1px solid #aca7c3;
  transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
  resize: none;

  /* ${mediaQueries('desktop')`
   margin-bottom: 18px;`}; */

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
  /* background-position: left 0.7em top 50%, 0 0; */

  /* ${mediaQueries('desktop')`
   margin-bottom: 18px;`}; */

  &:hover,
  &:focus {
    color: #7b61ff;
    outline: 1px solid #7b61ff;
  }

  option {
    padding: 0px 16px;
    border-radius: 8px;
    background: #fff;

    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
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
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;

    &:focus {
      transform: rotate(180deg);
    }
  }
`;
