import { RaceDistance } from "./levels";

export type PaceUnit =
  | "min / mi"
  | "min / km"
  | "min / 800m"
  | "min / 400m"
  | "min / 200m";

export const PACE_UNITS: PaceUnit[] = [
  "min / mi",
  "min / km",
  "min / 800m",
  "min / 400m",
  "min / 200m",
];

export type RaceUnit = "Total Time" | PaceUnit;
