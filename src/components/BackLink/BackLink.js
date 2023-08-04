import { GoArrowLeft } from 'react-icons/go';
import { BackLinkStyled } from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return (
    <BackLinkStyled to={to}>
      <GoArrowLeft size="24" />
      {children}
    </BackLinkStyled>
  );
};

export default BackLink;
