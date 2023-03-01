import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 48px;

  .form {
    &__label {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }

    &__input {
      padding: 11px;
      border-radius: 8px;
      background-color: #e8e8e8;
      border: 1px solid ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};

      &::placeholder {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  @media screen and (min-width: 987px) {
    .form {
      &__input:not([type="file"]) {
        padding: 20px 11px;
      }
    }
  }
`;

export default FormStyled;
