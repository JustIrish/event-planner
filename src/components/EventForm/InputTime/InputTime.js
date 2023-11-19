import { useState } from 'react';
import { parse, format } from 'date-fns';

import { TimePicker } from './TimePicker';

import { StyledIconDown } from './InputTime.styled';
import { InputStyled } from '../EventForm.styled';

const InputTime = ({ fieldName, initValue, onSelect }) => {
  const [time, setTime] = useState(initValue);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(prevState => !prevState);
  };

  const onChange = time => {
    const parsedTime = parse(time, 'hh:mm a', new Date());
    const formattedTime = format(parsedTime, 'HH:mm');
    setTime(formattedTime);
    onSelect(fieldName, formattedTime);
  };

  return (
    <>
      <InputStyled
        $time={time}
        $opened={isOpen}
        name="time"
        style={{ cursor: 'pointer' }}
        placeholder={time ? time : 'Input'}
        onClick={togglePopup}
      />
      <StyledIconDown
        $opened={isOpen}
        onClick={togglePopup}
        size="24"
        color="#7B61FF"
      />
      {isOpen && <TimePicker onSelectTime={onChange} />}
    </>
  );
};

export default InputTime;
