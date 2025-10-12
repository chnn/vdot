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
      className="border border-zinc-200 rounded bg-zinc-50 py-1 px-2 hover:bg-zinc-100 active:bg-zinc-200 cursor-pointer"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
