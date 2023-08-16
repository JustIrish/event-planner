import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setFilter, setSort } from 'redux/events/filterSlice';

import useWindowDimensions from 'hooks/useWindowDimensions';
import Button from 'components/Button/Button';
import Filter from 'components/Filter/Filter';
import { ButtonsContainer, BtnWrap } from './ActionBar.styled';
import { BsPlusLg, BsSliders } from 'react-icons/bs';
import { CiFilter } from 'react-icons/ci';

import { categories } from 'data/categories';
import { SortBy } from 'data/sortBy';

const ActionBar = () => {
  const location = useLocation();
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  const changeCategory = value => dispatch(setFilter(value));
  const changeSort = value => dispatch(setSort(value));

  useEffect(() => {
    dispatch(setFilter(''));
    dispatch(setSort(''));
  }, [dispatch]);

  return (
    <ButtonsContainer>
      {width < 768 ? (
        <BtnWrap filter="filter">
          <CiFilter size="24" color="#3F3F3F" />
          <Filter
            title="Category"
            icon={CiFilter}
            data={categories}
            onChange={changeCategory}
          />
        </BtnWrap>
      ) : (
        <Filter
          title="Category"
          icon={CiFilter}
          data={categories}
          onChange={changeCategory}
        />
      )}

      {width < 768 ? (
        <BtnWrap>
          <BsSliders size="24" color="#3F3F3F" />
          <Filter
            title="Sort by"
            icon={BsSliders}
            data={SortBy}
            onChange={changeSort}
          />
        </BtnWrap>
      ) : (
        <Filter
          title="Sort by"
          icon={BsSliders}
          data={SortBy}
          onChange={changeSort}
        />
      )}

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
