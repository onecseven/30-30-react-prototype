import React from "react";
import { IconProps, Icon } from "../Icons";


export const CheckMarkIcon = ({ x, y, width = "80", height = "90", }: IconProps) => {
  return (
    <Icon x={x} y={y} width={width} height={height}>
      <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </Icon>
  );
};
