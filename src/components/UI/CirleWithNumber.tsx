import { useState, useEffect } from "react";

import classes from "./CircleWithNumber.module.css";

type Props = {
  page: number;
};

const CirleWithNumber = (props: Props) => {
  const [userWidth, setUserWidth] = useState<number>(window.innerWidth);

  const updateMedia = () => {
    setUserWidth(userWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", () => updateMedia);
  });

  const numberInCricle = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  return (
    <div className={classes["circle-container"]}>
      {numberInCricle.map((version, index) => (
        <div key={index} className={classes["circle__wrapper"]}>
          <div
            key={index}
            className={`${classes.circle} ${
              index === props.page ? `${classes["circle--active"]}` : ""
            }`}
          >
            {index + 1}
          </div>
          {userWidth > 769 ? (
            <div className={classes["step"]}>
              <div className={classes["step__number"]}>Step {index + 1}</div>
              <div className={classes["step__text"]}>{version}</div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default CirleWithNumber;
