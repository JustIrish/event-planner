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

  const onChange = data => {
    console.log(format(date, 'dd.MM.yyyy'));
    setDate(data);
  };

  const onChoose = () => {
    //console.log(date);
    togglePopup();

    onSelect(fieldName, date);
  };

  const handleCancelClick = () => {
    togglePopup();
    setDate(initValue);
  };

  return (
    <>
      <InputStyled
        $date={date}
        $opened={isOpen}
        name="date"
        style={{ cursor: 'pointer' }}
        placeholder={date ? date : 'Input'}
        onClick={togglePopup}
      />
      <StyledIconDown
        $opened={isOpen}
        onClick={togglePopup}
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
            <BtnCancel onClick={handleCancelClick}>Cancel</BtnCancel>
            <BtnChoose onClick={onChoose}>Choose date</BtnChoose>
          </BtnWrap>
        </Popup>
      )}
    </>
  );
};

export default InputDate;
