import React from "react";
import { useEditingTask } from "../../store/useEditingTask";
import { CheckMarkIcon } from "../Shared/icons/CheckMarkIcon";
import { ReplySolidIcon } from "../Shared/icons/ReplySolidIcon";
import { TrashIcon } from "../Shared/icons/TrashIcon";
import { BtnLabel } from "../Timer/BtnLabel";

interface BottomBarProps {
  swap: () => void
}
//TODO TrashIcon functionality? A different CheckMark icon? idk
export const BottomBar = ({swap}: BottomBarProps) => {
  const [{id}, , dispatch] = useEditingTask()
  return <div className="bottomBar">
    <li className="tab-li " style={{ marginRight: "2%" }}>
      <label
        htmlFor={"icon"}
        className={`medium-background  innerSettings background-darken`}
        role="tab"
        aria-selected="true"
        aria-controls={"icon-panel"}
        tabIndex={0}
        onClick={() => (swap(), dispatch("delete", {id, changes: null}))}
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
        onClick={swap}
      >
        <ReplySolidIcon x="0" y="0" height="35"/>
        {/* <CheckMarkIcon x={"0"} y={"0"} height="35" /> */}
      </label>
    </li>
  </div>;
};
