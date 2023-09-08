import { useSelector } from "react-redux";
import { RootState } from "../../store";
import classes from "./PlanButton.module.css";

type Props = {
  image: string;
  value: string | number;
  payment: number;
  type: string;
  name: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
};

const PlanButton = (props: Props) => {
  const inputSwitch = useSelector(
    (state: RootState) => state.persistedReducer.inputSwitch
  );

  let yearOrMonth = inputSwitch.clicked ? "yr" : "mo";

  return (
    <label
      className={`${classes.plan} ${
        props.checked ? `${classes["plan-active"]}` : ""
      }`}
    >
      <input
        onChange={props.onChange}
        id={props.id}
        name={props.name}
        type={props.type}
      ></input>
      <div className={classes["plan-image"]}>
        <img src={props.image} alt=""></img>
      </div>
      <div>
        <div className={classes.variation}>{props.value}</div>
        <div className={classes.payment}>{`$${
          inputSwitch.clicked === true ? props.payment * 10 : props.payment
        }/${yearOrMonth}`}</div>
        {inputSwitch.clicked ? (
          <p className={classes.free}>2 months free</p>
        ) : null}
      </div>
    </label>
  );
};

export default PlanButton;
