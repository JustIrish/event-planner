import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setSearch } from 'redux/events/filterSlice';
import { CiSearch } from 'react-icons/ci';
import { StyledInput, WrapInput, BtnSearch } from './Search.styled';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const onChange = e => {
    setQuery(e.target.value.trim().toLocaleLowerCase());
    dispatch(setSearch(query));
  };

  return (
    <WrapInput>
      <StyledInput
        value={query}
        onChange={onChange}
        placeholder="Search by keywords"
      />
      <BtnSearch type="button">
        <CiSearch size="24" color="#7B61FF" />
      </BtnSearch>
    </WrapInput>
  );
};

export default Search;
