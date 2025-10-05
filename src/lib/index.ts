import { RaceDistance } from "./levels";

export type PaceUnit = typeof PACE_UNITS[number];

export const PACE_UNITS = [
  "min / mi",
  "min / km",
  "min / 800m",
  "min / 400m",
  "min / 200m",
] as const;

export type RaceUnit = "Total Time" | PaceUnit;
