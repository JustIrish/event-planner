import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/events/filterSlice';

import useWindowDimensions from 'hooks/useWindowDimensions';
import Button from 'components/Button/Button';
import { ButtonsContainer, BtnWrap, SelectStyled } from './ActionBar.styled';
import { BsPlusLg, BsSliders } from 'react-icons/bs';
import { CiFilter } from 'react-icons/ci';
import { categories } from 'data/categories';

const ActionBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { width } = useWindowDimensions();

  const handleSelectChange = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  return (
    <ButtonsContainer>
      <BtnWrap>
        <CiFilter size="24" color="#3F3F3F" />
        <SelectStyled onChange={handleSelectChange}>
          <option>Category</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </SelectStyled>
      </BtnWrap>
      <BtnWrap>
        {width > 767 && 'Sort by'}
        <BsSliders size="22" color="#3F3F3F" />
      </BtnWrap>

      {width > 767 ? (
        <Button
          type="button"
          title={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
              }}
            >
              <BsPlusLg size="24" color="#fff" />
              Add new event
            </div>
          }
          to={`/create`}
          location={location}
        />
      ) : (
        <Button
          type="button"
          title={<BsPlusLg size="24" color="#fff" />}
          to={`/create`}
          location={location}
        />
      )}
    </ButtonsContainer>
  );
};

export default ActionBar;
