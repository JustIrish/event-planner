import { StyledBtn } from './Button.styled';

const Button = ({ type, title, to, location, option }) => {
  return (
    <StyledBtn as={option} type={type} to={to} location={location}>
      {title}
    </StyledBtn>
  );
};

export default Button;
