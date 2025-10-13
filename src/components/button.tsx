import * as React from "react";
import { Txt } from "./txt";

export const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="border border-(--color-border) rounded bg-(--color-button-background) py-1 px-2 hover:bg-(--color-button-background-hover) active:bg-(--color-button-background-active) cursor-pointer"
      onClick={onClick}
    >
      <Txt>{label}</Txt>
    </button>
  );
};
