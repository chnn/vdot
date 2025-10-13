import { PaceUnit } from "../lib";
import { Txt } from "./txt";

const round = (seconds: number) => {
  return Math.round(seconds);
};

const leftPad = (n: number) => {
  if (n < 10) {
    return `0${n}`;
  }

  return `${n}`;
};

export const PACE_UNIT_SCALING_FACTORS: Record<PaceUnit, number> = {
  "min / mi": 1,
  "min / km": 0.6213711922,
  "min / 800m": 0.4970969538,
  "min / 400m": 0.2485484769,
  "min / 200m": 0.1242742384,
};

const formatDuration = (
  n: number | [number, number],
  paceUnit?: PaceUnit,
): string => {
  if (Array.isArray(n)) {
    return `${formatDuration(n[1], paceUnit)} - ${formatDuration(n[0], paceUnit)}`;
  }

  const m = n * PACE_UNIT_SCALING_FACTORS[paceUnit ?? "min / mi"];

  const hours = Math.floor(m / 60 / 60);
  const minutes = Math.floor((m - hours * 60 * 60) / 60);
  const seconds = m % 60;

  if (m <= 60) {
    return `0:${round(seconds)}`;
  }

  if (m < 3600) {
    return `${minutes}:${leftPad(round(seconds))}`;
  }

  return `${hours}:${leftPad(minutes)}:${leftPad(round(seconds))}`;
};

export const Duration = ({
  value,
  paceUnit,
  size = "md",
}: {
  value: number | [number, number];
  paceUnit?: PaceUnit;
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
}) => {
  return (
    <Txt size={size}>
      {formatDuration(value, paceUnit)}{" "}
      <Txt size="xxs" variant="secondary">
        {paceUnit}
      </Txt>
    </Txt>
  );
};
