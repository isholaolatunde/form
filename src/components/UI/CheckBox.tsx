import { useDispatch, useSelector } from "react-redux";
import { saveAddon, removeAddon } from "../../store/addonsSlice";
import { RootState } from "../../store";

import classes from "../UI/CheckBox.module.css";

type Props = {
  id: number;
  header: string;
  text: string;
  payment: number;
  checked: any;
};

const CheckBox = (props: Props) => {
  const dispatch = useDispatch();
  const inputSwitch = useSelector(
    (state: RootState) => state.persistedReducer.inputSwitch
  );

  let yearOrMonth = inputSwitch.clicked ? "yr" : "mo";

  const onInputCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    if (isChecked) {
      dispatch(
        saveAddon({
          id: props.id,
          header: props.header,
          payment: inputSwitch.clicked ? props.payment * 10 : props.payment,
        })
      );
    } else {
      dispatch(removeAddon(props.id));
    }
  };
  return (
    <div
      className={ `${classes["checkbox__wrapper"]} ${
        props.checked ? `${classes["checkbox__wrapper-active"]}` : ""
      } `}
    >
      <input
        className= {"border: 1px solid var(--light-grey)"}
        checked={props.checked}
        onChange={onInputCheck}
        type="checkbox"
      ></input>
      <div className={classes["checkbox__text-container"]}>
        <h3 className={classes["checkbox__header"]}>{props.header}</h3>
        <p className={classes["checkbox__text"]}>{props.text}</p>
      </div>
      <div className={classes["checkbox__price"]}>
        + ${inputSwitch.clicked ? props.payment * 10 : props.payment}
        {yearOrMonth}
      </div>
    </div>
  );
};

export default CheckBox;
