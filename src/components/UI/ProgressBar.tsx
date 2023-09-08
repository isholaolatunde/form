import { useEffect, useState } from "react";

import SideBarDesktopImage from "../../assets/bg-sidebar-desktop.svg";
import SideBarMobileImage from "../../assets/bg-sidebar-mobile.svg";
import CirleWithNumber from "./CirleWithNumber";

import classes from "./ProgressBar.module.css";

type Props = {
  page: number;
};

const ProgressBar = (props: Props) => {
  const [userWidth, setUserWidth] = useState<number>(window.innerWidth);

  const updateMedia = () => {
    setUserWidth(userWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", () => updateMedia);
  });

  return (
    <div className={classes["image__container"]}>
      <img
        src={userWidth > 769 ? SideBarDesktopImage : SideBarMobileImage}
        alt="decoration"
      />
      <CirleWithNumber page={props.page} />
    </div>
  );
};

export default ProgressBar;
