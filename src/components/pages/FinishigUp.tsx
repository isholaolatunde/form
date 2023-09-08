import { useSelector } from "react-redux";
import { RootState } from "../../store";

import classes from "./FinishingUp.module.css";

const FinishigUp = () => {
  const userPlan = useSelector(
    (state: RootState) => state.persistedReducer.userPlan
  );
  const inputSwitch = useSelector(
    (state: RootState) => state.persistedReducer.inputSwitch
  );
  const planPayment = useSelector(
    (state: RootState) => state.persistedReducer.userPlan.payment
  );
  const addonsFromState = useSelector((state: RootState) =>
    state.persistedReducer.addons.addons.map((addon) => addon)
  );

  let paymentValues = addonsFromState.map((addons) => addons.payment);

  let total = paymentValues.reduce((accu: any, curVal) => {
    if (!accu && !curVal) {
      // eslint-disable-next-line array-callback-return
      return ;
    } else {
      return accu + curVal;
    }
  }, 0);

  let yearOrMonthShort = inputSwitch.clicked ? "/yr" : "/mo";
  let yearOrMonthFullText = inputSwitch.clicked ? "year" : "month";

  return (
    <section className={classes["finish-section"]}>
      <header>
        <p>Double-check everything looks OK before confirming.</p>
      </header>
      <div className={classes["finalized__plan-container"]}>
        <div className={classes["finalized__plan"]}>
          <div className={classes["user-plan"]}>
            <span className={classes["user-plan__type"]}>{userPlan.type}</span>
            {inputSwitch.clicked ? (
              <span className={classes.yearly}>(Yearly)</span>
            ) : (
              <span className={classes.monthly}>(Monthly)</span>
            )}
          </div>
          <a className={classes.change} href="/">
            Change
          </a>
        </div>
        <div
          className={classes["finalized__plan-payment"]}
        >{`$${planPayment}${yearOrMonthShort}`}</div>
      </div>
      {!userPlan && addonsFromState.length === 0 ? (
        <p>please choose your plan</p>
      ) : null}
      <div className={classes["finalized__addon-container"]}>
        {addonsFromState.map((addon) => (
          <div className={classes.addons} key={addon.id}>
            <div className={classes["finalized__addon-header"]}>
              {addon.header}
            </div>
            <div
              className={classes["finalized__addon-payement"]}
            >{`+$${addon.payment}${yearOrMonthShort}`}</div>
          </div>
        ))}
      </div>
      <div className={classes["finalized__total-container"]}>
        <div className={classes["finalized__total"]}>
          Total (per {yearOrMonthFullText})
        </div>
        <div className={classes["finalized__total-payment"]}>
          +${userPlan.payment + total}
          {yearOrMonthShort}
        </div>
      </div>
    </section>
  );
};

export default FinishigUp;
