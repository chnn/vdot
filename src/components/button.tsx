import * as React from "react";

export const Button = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="border border-border rounded bg-button-background py-1 px-2 hover:bg-button-background-hover active:bg-button-background-active cursor-pointer"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
