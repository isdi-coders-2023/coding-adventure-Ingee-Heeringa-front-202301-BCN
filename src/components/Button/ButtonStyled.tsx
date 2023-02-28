import styled from "styled-components";

const ButtonStyled = styled.button`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.accent};
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: 1.25rem;
  height: 40px;
  width: 323px;
  border-radius: 10px;

  :disabled {
    opacity: 0.57;
  }

  @media screen and (min-width: 987px) {
    height: 57px;
    width: 327px;
  }
`;

export default ButtonStyled;