import { StyledBtn } from './Button.styled';

const Button = ({ type, title, to, location, option, onClick }) => {
  return (
    <StyledBtn
      as={option}
      type={type}
      to={to}
      state={{ from: location }}
      onClick={onClick}
    >
      {title}
    </StyledBtn>
  );
};

export default Button;
