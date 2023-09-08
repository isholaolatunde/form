import { useDispatch, useSelector } from "react-redux/es/exports";
import { RootState } from "../../store";
import { saveUserPlanSelection } from "../../store/userPlanSlice";
import { saveStatus } from "../../store/inputSwitchSlice";

import IconAdvanced from "../../assets/icon-advanced.svg";
import IconArcade from "../../assets/icon-arcade.svg";
import IconPro from "../../assets/icon-pro.svg";
import InputSwitch from "../UI/InputSwitch";
import PlanButton from "../UI/PlanButton";

import classes from "./YourPlan.module.css";

const planVariations = [
  {
    image: IconArcade,
    variation: "Arcade",
    payment: 9,
  },
  {
    image: IconAdvanced,
    variation: "Advanced",
    payment: 12,
  },
  {
    image: IconPro,
    variation: "Pro",
    payment: 15,
  },
];

const YourPlan = () => {
  const dispatch = useDispatch();
  const userPlan = useSelector(
    (state: RootState) => state.persistedReducer.userPlan
  );
  const inputSwitch = useSelector(
    (state: RootState) => state.persistedReducer.inputSwitch
  );

  const inputSwitchHandler = () => {
    dispatch(saveStatus(!inputSwitch.clicked));
  };

  return (
    <section className={classes["plan-button__section"]}>
      <p>You have the option of montly or yearly billing</p>
      <div className={classes["plan-button__container"]}>
        {planVariations.map((plan, index) => (
          <PlanButton
            onChange={() =>
              dispatch(
                saveUserPlanSelection({
                  type: plan.variation,
                  payment:
                    inputSwitch.clicked === true
                      ? plan.payment * 10
                      : plan.payment,
                })
              )
            }
            id="radio-button"
            type="radio"
            key={index}
            image={plan.image}
            value={plan.variation}
            name="plan"
            payment={plan.payment}
            checked={plan.variation === userPlan.type}
          />  
        ))}
      </div>
      <div>
        <InputSwitch
          checked={inputSwitch.clicked}
          onChange={inputSwitchHandler}
        />
      </div>
    </section>
  );
};

export default YourPlan;
