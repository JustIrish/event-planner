import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/events/filterSlice';

import { SelectStyled } from './Filter.styled';

const Filter = ({ title, icon: IconComponent, data }) => {
  const dispatch = useDispatch();

  const dataOptions = data.map(item => ({
    value: item,
    label: item,
  }));

  const onChange = ({ value }) => {
    dispatch(setFilter(value));
  };

  return (
    <SelectStyled
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: () => <IconComponent size="24" />,
      }}
      onChange={onChange}
      options={dataOptions}
      className="react-select-container"
      classNamePrefix="Select"
      placeholder={title}
    />
  );
};

export default Filter;
