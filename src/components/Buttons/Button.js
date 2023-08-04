import { StyledBtn } from './Button.styled';

const Button = ({ type, title, to, location }) => {
  return (
    <StyledBtn type={type} to={to} location={location}>
      {title}
    </StyledBtn>
  );
};

export default Button;
