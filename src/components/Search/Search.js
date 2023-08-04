import { CiSearch } from 'react-icons/ci';
import { StyledInput } from './Search.styled';

const Search = () => {
  return (
    <div>
      <StyledInput placeholder="Search by keywords" />
      <button type="button">
        <CiSearch size="24" color="#7B61FF" />
      </button>
    </div>
  );
};

export default Search;
