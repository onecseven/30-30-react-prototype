import React from "react";

interface LabelProps {
  x: string
  y: string
  label: string
}

export const BtnLabel = ({ label = "", x, y }: LabelProps) => {
  return (
    <text
      className="light-fill fillT"
      x={x}
      y={y}
      fontSize="48"
      fontWeight="bolder"
      xmlSpace="preserve"
    >
      <tspan x={x} y={y} fontSize="48">
        {label}
      </tspan>
    </text>
  );
};
