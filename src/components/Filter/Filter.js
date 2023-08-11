import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/events/filterSlice';

import { SelectStyled } from './Filter.styled';
import { categories } from 'data/categories';

const categoriesOptions = categories.map(category => ({
  value: category,
  label: category,
}));

const Filter = ({ title, icon: IconComponent }) => {
  const dispatch = useDispatch();

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
      options={categoriesOptions}
      className="react-select-container"
      classNamePrefix="Select"
      placeholder={title}
    />
  );
};

export default Filter;
