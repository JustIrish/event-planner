import { useState } from 'react';

import { format } from 'date-fns';

import {
  StyledIconDown,
  Popup,
  BtnWrap,
  BtnCancel,
  BtnChoose,
  StyledCalendar,
} from './InputDate.styled';
import { InputStyled } from '../EventForm.styled';

const InputDate = ({ fieldName, initValue, onSelect }) => {
  const [date, setDate] = useState(initValue);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(prevState => !prevState);
  };

  const onChange = newData => {
    const formatedDate = format(newData, 'yyyy-MM-dd');
    setDate(formatedDate);
  };

  const onChoose = () => {
    onSelect(fieldName, date);
    togglePopup();
  };

  const handleCancelClick = () => {
    setDate(initValue);
    togglePopup();
  };

  return (
    <>
      <InputStyled
        $date={date}
        $opened={isOpen}
        id="date"
        name="date"
        style={{ cursor: 'pointer' }}
        placeholder={date ? date : 'Input'}
      />

      <StyledIconDown
        onClick={togglePopup}
        style={{ pointerEvents: 'auto' }}
        $opened={isOpen}
        size="24"
        color="#7B61FF"
      />

      {isOpen && (
        <Popup>
          <StyledCalendar
            calendarType="gregory"
            locale="en-EN"
            showNeighboringMonth={false}
            next2Label={null}
            prev2Label={null}
            onChange={onChange}
            value={date}
          />
          <BtnWrap>
            <BtnCancel onClick={handleCancelClick} type="button">
              Cancel
            </BtnCancel>
            <BtnChoose onClick={onChoose} type="button">
              Choose date
            </BtnChoose>
          </BtnWrap>
        </Popup>
      )}
    </>
  );
};

export default InputDate;
