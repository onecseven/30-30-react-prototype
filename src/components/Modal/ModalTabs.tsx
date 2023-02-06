import React from "react"
import { onEnter } from "../Shared/onEnter"
import { ModalViews } from "./ModalView"

interface Props {
  swap: (to: ModalViews) => void
  active: ModalViews
}

export const ModalTabs = ({ swap, active }: Props) => {
  return (
    <ul className="bottomBar">
      <li className="tab-li " style={{ marginRight: "2%" }}>
        <input type="radio" id="icon" className={`tab-input`}></input>
        <label
          htmlFor={"icon"}
          className={`medium-background tatiTab ${
            active === "ICON" ? "" : "inactive"
          }`}
          role="tab"
          aria-selected="true"
          aria-controls={"icon-panel"}
          tabIndex={0}
          onClick={() => swap("ICON")}
          onKeyUp={onEnter(() => swap("ICON"))}
>
          Icon
        </label>
      </li>
      <li className="tab-li">
        <input type="radio" id="color" className={`tab-input`}></input>
        <label
          htmlFor={"color"}
          className={`medium-background tatiTab ${
            active === "COLOR" ? "" : "inactive"
          }`}
          role="tab"
          aria-selected="true"
          aria-controls={"color-panel"}
          tabIndex={0}
          onClick={() => swap("COLOR")}
          onKeyUp={onEnter(() => swap("COLOR"))}
        >
          Color
        </label>
      </li>
    </ul>
  )
}
