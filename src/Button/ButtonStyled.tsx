import styled from "styled-components";

const ButtonStyled = styled.button`
  color: #1e1e1e;
  background-color: #cccf18;
  font-family: "Saira Stencil One", sans-serif;
  font-size: 1.25rem;
  padding: 5px 123px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  :disabled {
    opacity: 0.57;
  }

  @media screen and (min-width: 987px) {
    padding: 13px 120px;
  }
`;

export default ButtonStyled;
