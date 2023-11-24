import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri';
import Calendar from 'react-calendar';

export const StyledIconDown = styled(RiArrowDownSLine)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: ${p => (p.$opened ? 'rotate(180deg)' : null)};
`;

export const Popup = styled.div`
  margin-top: 18px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
  padding: 20px;
  overflow: hidden;

  border-radius: 11px;
  background-color: #fff;
  border: none;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  z-index: 5;
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;

export const BtnCancel = styled.button`
  min-width: 75px;
  padding: 8px 16px;
  margin: 0;
  cursor: pointer;
  border: 1px solid #7b61ff;
  border-radius: 4px;
  background-color: #ffffff;
  color: #7b61ff;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  font-family: inherit;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    border-color: #6243ff;
    color: #6243ff;
  }
`;

export const BtnChoose = styled.button`
  min-width: 110px;
  padding: 8px 16px;
  margin: 0;
  border-color: transparent;
  cursor: pointer;
  border-radius: 4px;
  background-color: #7b61ff;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  font-family: inherit;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    background-color: #6243ff;
  }
`;

export const StyledCalendar = styled(Calendar)`
  border: none;
  font-family: Poppins, sans-serif !important;
  width: 100%;
  margin-bottom: 16px;
  background-color: #ffffff;

  button {
    font-family: Poppins, sans-serif !important;
    padding: 8px;
    margin: 0;
    border: 0;
    outline: none;
    border: none;
    background-color: #ffffff;
    cursor: pointer;
  }

  .react-calendar__navigation {
    height: 100%;
    display: flex;
    margin-bottom: 16px;
  }

  .react-calendar__navigation button {
    min-width: 44px;
    padding: 0;
    background: none;
  }

  .react-calendar__navigation__label__labelText {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
  }

  .react-calendar__month-view__weekdays {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 16px;
    text-transform: none;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.33;
    color: #3f3f3f;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 8px 0px;
  }

  .react-calendar__month-view__weekdays__weekday--weekend {
    color: #ff2b77;
  }

  .react-calendar__tile {
    font-size: 12px;

    line-height: 1.33;
  }

  .react-calendar__tile--now {
    background: inherit;
    font-weight: 600;
    color: #7b61ff !important;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    color: #7b61ff !important;
    background: inherit;
  }

  .react-calendar__tile--active {
    background: #7b61ff !important;
    color: #ffffff !important;
  }

  .react-calendar__tile.react-calendar__month-view__days__day {
    color: #aca7c3;
  }

  .react-calendar__month-view__weekdays__weekday--weekend {
    color: #ff2b77;
  }

  .react-calendar__month-view__days {
    display: flex;
    flex-wrap: wrap;
  }

  .react-calendar__month-view__days__day--weekend {
    color: inherit;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: transparent;
    color: #3f3f3f;
  }

  :where(abbr[title]) {
    text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
  }
`;
