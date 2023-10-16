import { SelectStyled } from './SelectField.styled';

const SelectField = ({ fieldName, icon: IconComponent, data, onSelect }) => {
  const dataOptions = data.map(item => ({
    value: item,
    label: item,
  }));

  const handleOnChange = ({ value }) => {
    onSelect(fieldName, value);
  };

  return (
    <SelectStyled
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: () => <IconComponent size="24" />,
      }}
      onChange={handleOnChange}
      options={dataOptions}
      className="react-select-container"
      classNamePrefix="Select"
      placeholder="Input"
    />
  );
};

export default SelectField;
