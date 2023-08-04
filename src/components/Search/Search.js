import { CiSearch } from 'react-icons/ci';
import { StyledInput, WrapInput, BtnSearch } from './Search.styled';

const Search = () => {
  return (
    <WrapInput>
      <StyledInput placeholder="Search by keywords" />
      <BtnSearch type="button">
        <CiSearch size="24" color="#7B61FF" />
      </BtnSearch>
    </WrapInput>
  );
};

export default Search;
