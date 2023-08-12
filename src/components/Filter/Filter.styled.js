import styled from 'styled-components';
import Select from 'react-select';

export const SelectStyled = styled(Select)`
  display: block;
  min-width: 143px;
  height: 56px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border-radius: 8px;

  font-size: 16px;
  font-weight: 500;

  .Select__control {
    height: 100%;
    gap: 16px;
    flex-direction: row;
    padding: 16px;
    border-radius: 8px;
    border: none;
    background-color: #fff;
    box-shadow: none;

    &:hover,
    &:focus,
    &:active {
      cursor: pointer;
      border-color: transparent;

      .Select__placeholder,
      .Select__indicators > svg {
        color: #7b61ff;
      }
    }
    &--is-focused {
      .Select__indicators > svg {
        color: #7b61ff;
      }
    }
    &--menu-is-open {
      box-shadow: none;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

      .Select__indicators > svg {
        color: #7b61ff;
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
    line-height: 1.4;
    color: #3f3f3f;
  }

  .Select__input-container {
    margin: 0;
    padding: 0;
  }

  .Select__menu {
    z-index: 10;
    border: transparent;
    margin: 0;
    background-color: transparent;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);

    font-size: 14px;
    line-height: 1;
    color: #aca7c3;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    &-list {
      padding: 0;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }

  .Select__option {
    padding: 8px 24px;

    color: #aca7c3;
    background-color: #fff;
    border-top: 1px solid #aca7c3;
    transition: color 250ms ease-in-out;

    &:hover {
      cursor: pointer;
      color: #7b61ff;
    }
    &--is-focused {
      background-color: #fff;
    }
    &--is-selected {
      color: #7b61ff;
      background-color: #fff;

      .Select__indicators > svg {
        color: #7b61ff;
      }
    }
  }
  .Select__indicators {
    color: #3f3f3f;
  }
`;
