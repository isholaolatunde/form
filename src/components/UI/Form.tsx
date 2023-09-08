import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { saveUserPersonalData } from "../../store/userPersonalDataSlice";

import { RootState } from "../../store";

import classes from "./Form.module.css";

type FormData = {
  username: string;
  email: string;
  phoneNumber: string;
};

const Form = () => {
  const [formData] = useState<FormData>({
    username: "",
    email: "",
    phoneNumber: "",
  });

  const userName = useSelector(
    (state: RootState) => state.persistedReducer.userInputs.username
  );
  const email = useSelector(
    (state: RootState) => state.persistedReducer.userInputs.email
  );
  const phoneNumber = useSelector(
    (state: RootState) => state.persistedReducer.userInputs.phoneNumber
  );
  const dispatch = useDispatch();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const error: String = "This field is required";

  const onInputChangeHandler = () => {
    dispatch(
      saveUserPersonalData({
        ...formData,
        username: nameRef.current?.value,
        email: emailRef.current?.value,
        phoneNumber: phoneNumberRef.current?.value,
      })
    );
  };

  return (
    <form>
      <div className={classes["form__control"]}>
        <label className={classes["form__control-label"]} htmlFor="name">
          Name
        </label>
        <input
          placeholder="e.g Ishola Olatunde"
          className={classes["form__control-input"]}
          onChange={onInputChangeHandler}
          type="text"
          name="name"
          ref={nameRef}
          value={userName}
        />
        <div className={classes.error}>{userName ? null : error}</div>
      </div>
      <div className={classes["form__control"]}>
        <label className={classes["form__control-label"]} htmlFor="email">
          Email Address
        </label>
        <input
          placeholder="e.g ishola.olatundey@gmail.com"
          className={classes["form__control-input"]}
          onChange={onInputChangeHandler}
          type="email"
          name="email"
          ref={emailRef}
          value={email}
        />
        <div className={classes.error}>{email ? null : error}</div>
      </div>
      <div className={classes["form__control"]}>
        <label className={classes["form__control-label"]} htmlFor="phone">
          Phone Number
        </label>
        <input
          placeholder="e.g +2347038261970"
          className={classes["form__control-input"]}
          onChange={onInputChangeHandler}
          type="tel"
          name="phone"
          ref={phoneNumberRef}
          value={phoneNumber}
        />
        <div className={classes.error}>{phoneNumber ? null : error}</div>
      </div>
    </form>
  );
};

export default Form;
