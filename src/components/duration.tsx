import { PaceUnit, formatDuration } from "../lib";

export const Duration = ({
  value,
  paceUnit,
}: {
  value: number | [number, number];
  paceUnit?: PaceUnit;
}) => {
  return <span>{formatDuration(value, paceUnit)}</span>;
};
