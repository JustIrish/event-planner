import Button from 'components/Buttons/Button';
import { ButtonWrap } from './ActionBar.styled';
import { BsPlusLg } from 'react-icons/bs';

const ActionBar = () => {
  return (
    <ButtonWrap>
      <Button type="button" title={<BsPlusLg size="24" color="#fff" />} />
    </ButtonWrap>
  );
};

export default ActionBar;
