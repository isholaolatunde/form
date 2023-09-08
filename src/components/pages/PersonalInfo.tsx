import Form from "../UI/Form";

import classes from "./PersonalInfo.module.css";

const PersonalInfo = () => {
  return (
    <section className={classes["personal-info__section"]}>
      <p>Please provide your name, email address, and phone number.</p>
      <Form />
    </section>
  );
};

export default PersonalInfo;
