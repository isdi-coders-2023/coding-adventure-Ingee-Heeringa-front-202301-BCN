import styled from "styled-components";

const ButtonStyled = styled.button`
  color: var(--primaryColor);
  background-color: var(--accentColor);
  font-family: var(--secondaryFont);
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
