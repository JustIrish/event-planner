import { MainTitleStyled } from './MainTitle.styled';

const MainTitle = ({ children }) => {
  return (
    <>
      <MainTitleStyled>{children}</MainTitleStyled>
    </>
  );
};

export default MainTitle;
