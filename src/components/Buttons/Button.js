import { StyledBtn } from './Button.styled';

const Button = ({ type, title }) => {
  return <StyledBtn type={type}>{title}</StyledBtn>;
};

export default Button;
