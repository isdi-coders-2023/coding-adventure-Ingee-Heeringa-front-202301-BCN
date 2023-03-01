import { useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";
import { RegisterData } from "./types";

const Form = (): JSX.Element => {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  } as RegisterData);

  const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setRegisterData({
      ...registerData,
      [event.target.id]: event.target.value,
    });
  };

  const isDisabled = registerData.email === "" || registerData.password === "";
  const buttonText = "Sign up";

  return (
    <FormStyled className="form" onSubmit={() => {}}>
      <label htmlFor="email" className="form__label">
        Email
        <input
          type="email"
          id="email"
          placeholder="Introduce your email"
          autoComplete="off"
          className="form__input"
          onChange={handleChangeData}
          value={registerData.email}
        />
      </label>
      <label htmlFor="password" className="form__label">
        Password
        <input
          type="password"
          id="password"
          placeholder="Introduce your password"
          className="form__input"
          onChange={handleChangeData}
          value={registerData.password}
        />
      </label>
      <label htmlFor="image" className="form__label">
        Image
        <input
          type="file"
          id="image"
          accept="image/*"
          className="form__input form__input--file"
        />
      </label>
      <Button text={buttonText} isDisabled={isDisabled} />
    </FormStyled>
  );
};

export default Form;
