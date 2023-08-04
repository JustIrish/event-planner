import { useLocation } from 'react-router-dom';

import Button from 'components/Buttons/Button';
import { ButtonWrap } from './ActionBar.styled';
import { BsPlusLg } from 'react-icons/bs';

const ActionBar = () => {
  const location = useLocation();

  return (
    <ButtonWrap>
      <Button
        type="button"
        title={<BsPlusLg size="24" color="#fff" />}
        to={`/create`}
        location={location}
      />
    </ButtonWrap>
  );
};

export default ActionBar;
