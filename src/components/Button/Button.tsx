import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  isDisabled: boolean;
}

const Button = ({ text, isDisabled }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled disabled={isDisabled} type="submit">
      {text}
    </ButtonStyled>
  );
};

export default Button;
