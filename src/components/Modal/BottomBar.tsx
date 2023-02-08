import React from "react";
import { CheckMarkIcon } from "../Shared/icons/CheckMarkIcon";
import { TrashIcon } from "../Shared/icons/TrashIcon";


export const BottomBar = () => {
  return <div className="bottomBar">
    <li className="tab-li " style={{ marginRight: "2%" }}>
      <label
        htmlFor={"icon"}
        className={`medium-background  innerSettings background-darken`}
        role="tab"
        aria-selected="true"
        aria-controls={"icon-panel"}
        tabIndex={0}
      >
        <TrashIcon width="40" height="35" x="0" y="0" />
      </label>
    </li>
    <li className="tab-li background-darken ">
      <label
        htmlFor={"icon"}
        className={`medium-background innerSettings background-darken`}
        role="tab"
        aria-selected="true"
        aria-controls={"icon-panel"}
        tabIndex={0}
      >
        <CheckMarkIcon x={"0"} y={"0"} height="35" />
      </label>
    </li>
  </div>;
};
