import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const buttonText = "Sign up";
  const buttonType = "submit";
  const isDisabled = false;

  return (
    <FormStyled className="form">
      <label htmlFor="email">
        Email
        <input
          type="text"
          id="email"
          placeholder="Introduce your email"
          autoComplete="off"
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          id="password"
          placeholder="Introduce your password"
        />
      </label>
      <label htmlFor="image">
        Image
        <input type="file" id="image" accept="image/*" />
      </label>
      <Button text={buttonText} type={buttonType} disabled={isDisabled} />
    </FormStyled>
  );
};

export default Form;
