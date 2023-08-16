import { SelectStyled } from './Filter.styled';

const Filter = ({ title, icon: IconComponent, data, onChange }) => {
  const dataOptions = data.map(item => ({
    value: item,
    label: item,
  }));

  const handleOnChange = ({ value }) => {
    onChange(value);
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
      placeholder={title}
    />
  );
};

export default Filter;
