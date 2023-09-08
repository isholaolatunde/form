import classes from "./InputSwitch.module.css";

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
};

const InputSwitch = (props: Props) => {
  return (
    <div className={classes["input__switch-container"]}>
      <span className={classes.month}>Monthly</span>
      <label className={classes.switch}>
        <input
          checked={props.checked}
          onChange={props.onChange}
          type="checkbox"
        />
        <span className={classes.slider}></span>
      </label>
      <span className={classes.year}>Yearly</span>
    </div>
  );
};

export default InputSwitch;
