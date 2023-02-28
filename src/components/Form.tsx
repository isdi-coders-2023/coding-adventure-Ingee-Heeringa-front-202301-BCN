import Button from "./Button/Button";

const Form = (): JSX.Element => {
  const buttonText = "Sign up";
  const buttonType = "submit";
  const isDisabled = false;

  return (
    <form className="form">
      <label htmlFor="email">
        Email
        <input type="text" id="email" />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" id="password" />
      </label>
      <label htmlFor="image">
        Image
        <input type="file" id="image" accept="image/*" />
      </label>
      <Button text={buttonText} type={buttonType} disabled={isDisabled} />
    </form>
  );
};

export default Form;
