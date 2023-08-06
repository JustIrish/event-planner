import { useLocation } from 'react-router-dom';

import useWindowDimensions from 'hooks/useWindowDimensions';
import Button from 'components/Button/Button';
import { ButtonsContainer, BtnWrap } from './ActionBar.styled';
import { BsPlusLg, BsSliders } from 'react-icons/bs';
import { CiFilter } from 'react-icons/ci';

const ActionBar = () => {
  const location = useLocation();
  const { width } = useWindowDimensions();

  return (
    <ButtonsContainer>
      <BtnWrap>
        {width > 767 && 'Category'} <CiFilter size="24" color="#3F3F3F" />
      </BtnWrap>
      <BtnWrap>
        {width > 767 && 'Sort by'}
        <BsSliders size="22" color="#3F3F3F" />
      </BtnWrap>
      <Button
        type="button"
        title={<BsPlusLg size="24" color="#fff" />}
        to={`/create`}
        location={location}
      />
    </ButtonsContainer>
  );
};

export default ActionBar;
