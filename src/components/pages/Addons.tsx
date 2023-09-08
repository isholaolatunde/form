import { useSelector } from "react-redux";
import { RootState } from "../../store";

import Checkbox from "../UI/CheckBox";

import classes from "./Addons.module.css";

const Addons = () => {
  const addonsFromStateID = useSelector((state: RootState) =>
    state.persistedReducer.addons.addons.map((addon) => addon.id)
  );

  const addons = [
    {
      id: 1,
      header: "Online Service",
      text: "Access to multiple games",
      payment: 1,
    },
    {
      id: 2,
      header: "Larger Storage",
      text: "Extra 1TB of cloud save",
      payment: 2,
    },
    {
      id: 3,
      header: "Customizable Profile",
      text: "Custom theme on your profile",
      payment: 2,
    },
  ];

  return (
    <section className={classes["addon-section"]}>
      <p>Add-ons help enhance your gaming experience.</p>
      {addons.map((addon) => (
        <Checkbox
          id={addon.id}
          key={addon.id}
          header={addon.header}
          text={addon.text}
          payment={addon.payment}
          checked={addonsFromStateID.find((id) => id === addon.id)}
        />
      ))}
    </section>
  );
};

export default Addons;
