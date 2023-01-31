import React from "react";

interface LabelProps {
  x: string
  y: string
  label: string
  size?: string
}

export const BtnLabel = ({ label = "", x, y, size="48px"}: LabelProps) => {
  return (
    <text
      className="fadeIn light-fill fillT"
      x={x}
      y={y}
      fontSize={size}
      fontWeight="bolder"
    >
      <tspan x={x} y={y} fontSize={size}>
        {label}
      </tspan>
    </text>
  );
};
