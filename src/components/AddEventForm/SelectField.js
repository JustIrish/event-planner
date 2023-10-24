import { useState, forwardRef } from 'react';
import { SelectStyled } from './SelectField.styled';

const SelectField = forwardRef(
  ({ fieldName, initValue, icon: IconComponent, data, onSelect }, ref) => {
    const [selectedValue, setSelectedValue] = useState(initValue);

    const dataOptions = data.map(item => ({
      value: item,
      label: item,
    }));

    const handleOnChange = ({ value }) => {
      setSelectedValue(value);
      onSelect(fieldName, value);
    };

    return (
      <SelectStyled
        ref={ref}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => <IconComponent size="24" />,
        }}
        defaultValue={{ label: selectedValue, value: selectedValue }}
        onChange={handleOnChange}
        options={dataOptions}
        maxMenuHeight={500}
        className="react-select-container"
        classNamePrefix="Select"
        placeholder="Input"
      />
    );
  }
);

export default SelectField;
