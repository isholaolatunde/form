import { useSelector } from "react-redux";
import { RootState } from "../../store";

import ThankYouIcon from "../../assets/icon-thank-you.svg";

import classes from "./ThankYou.module.css";

const ThankYou = () => {
  const userPlan = useSelector(
    (state: RootState) => state.persistedReducer.userPlan
  );

  const userName = useSelector(
    (state: RootState) => state.persistedReducer.userInputs.username
  );

  return (
    <section className={classes["thankyou-section"]}>
      <div className={classes["thanks-wrapper"]}>
        {userPlan.type === "" ? (
          <p>Please choose your plan</p>
        ) : (
          <>
            <img
              className={classes.thanks}
              src={ThankYouIcon}
              alt="thank you"
            />
            <header>
              <p className={classes["thanks__header"]}>Thank you {userName}!</p>
            </header>
            <p className={classes["thanks__text"]}>
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default ThankYou;
