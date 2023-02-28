import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const buttonText = "Sign up";
  const buttonType = "submit";
  const isDisabled = false;

  return (
    <FormStyled className="form">
      <label htmlFor="email" className="form__label">
        Email
        <input
          type="email"
          id="email"
          placeholder="Introduce your email"
          autoComplete="off"
          className="form__input"
        />
      </label>
      <label htmlFor="password" className="form__label">
        Password
        <input
          type="password"
          id="password"
          placeholder="Introduce your password"
          className="form__input"
        />
      </label>
      <label htmlFor="image" className="form__label">
        Image
        <input
          type="file"
          id="image"
          accept="image/*"
          className="form__input--file"
        />
      </label>
      <Button text={buttonText} type={buttonType} disabled={isDisabled} />
    </FormStyled>
  );
};

export default Form;
