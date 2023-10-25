import styled from 'styled-components';
import Select from 'react-select';

export const SelectStyled = styled(Select)`
  display: block;
  width: 100%;

  .Select__control {
    padding: 16px 35px 16px 12px;
    color: #3f3f3f;

    font-size: 16px;
    font-weight: 400;

    border-radius: 8px;
    border: 1px solid #aca7c3;
    transition: color 300ms cubic-bezier(0.165, 0.84, 0.44, 1),
      border-color 300ms cubic-bezier(0.165, 0.84, 0.44, 1);

    box-shadow: none;

    appearance: none;
    cursor: pointer;

    &:hover,
    &:focus {
      color: #7b61ff;
      border-color: #7b61ff;
    }

    &--menu-is-open {
      .Select__indicators > svg {
        transform: rotate(180deg);
      }
    }
  }

  .Select__value-container {
    padding: 0;
  }
  .Select__single-value {
    margin: 0;
    color: #7b61ff;
  }
  .Select__placeholder {
    margin: 0;
    line-height: 1.15;
  }

  .Select__input-container {
    margin: 0;
    padding: 0;
    line-height: 1.15;
  }

  .Select__menu {
    border: transparent;
    margin-top: 18px;
    margin-bottom: 0;
    border-radius: 8px;
    background: #fff;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    &-list {
      padding: 0 16px;
    }
  }

  .Select__option {
    padding: 16px 0;

    font-size: 16px;
    color: #3f3f3f;
    background-color: #fff;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:not(:first-child) {
      border-top: 1px solid #aca7c3;
    }

    &:hover {
      cursor: pointer;
      color: #7b61ff;
    }
  }
`;
