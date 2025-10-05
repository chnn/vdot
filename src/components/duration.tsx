import { PaceUnit } from "../lib";

const round = (seconds: number, totalDuration: number) => {
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
    return `0:${round(seconds, m)}`;
  }

  if (m < 3600) {
    return `${minutes}:${leftPad(round(seconds, m))}`;
  }

  return `${hours}:${leftPad(minutes)}:${leftPad(round(seconds, m))}`;
};

export const Duration = ({
  value,
  paceUnit,
}: {
  value: number | [number, number];
  paceUnit?: PaceUnit;
}) => {
  return <span>{formatDuration(value, paceUnit)} </span>;
};
