import classes from "./ButtonSecondary.module.css";

type ButtonProps = {
  text: string;
  disabled: boolean;
  onClick: () => void;
};

const ButtonSecondary = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`${classes.btn}
      ${classes["btn--secondary"]}`}
    >
      {props.text}
    </button>
  );
};

export default ButtonSecondary;
