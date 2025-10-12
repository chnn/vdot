import { useAtomValue, useSetAtom } from "jotai";
import { RaceDistance, TrainingEffort, VdotLevel } from "./levels";
import { PaceUnit } from ".";
import { atomWithStorage } from "jotai/utils";

export const raceDistanceVisibilityAtom = atomWithStorage<
  Record<RaceDistance, boolean>
>("raceDistanceVisibilityAtom_v0", {
  "1 mi": true,
  "3000 m": false,
  "2 mi": false,
  "5 km": true,
  "10 km": true,
  "15 km": false,
  "half marathon": true,
  marathon: true,
});

export const useVisibleRaceDistances = () => {
  const raceDistanceVisibility = useAtomValue(raceDistanceVisibilityAtom);

  return Object.entries(raceDistanceVisibility)
    .filter(([_, v]) => v)
    .map(([k, _]) => k) as RaceDistance[];
};

export const trainingEffortsVisibilityAtom = atomWithStorage<
  Record<TrainingEffort, boolean>
>("trainingEffortsVisibilityAtom_v0", {
  easy: true,
  marathon: true,
  threshold: true,
  interval: true,
  repetitions: true,
});

export const useVisibleTrainingEfforts = () => {
  const trainingEffortVisibility = useAtomValue(trainingEffortsVisibilityAtom);

  return Object.entries(trainingEffortVisibility)
    .filter(([_, v]) => v)
    .map(([k, _]) => k) as TrainingEffort[];
};

const visiblePaceUnits = atomWithStorage<PaceUnit[]>("visiblePaceUnits_v0", [
  "min / mi",
]);

export const useVisiblePaceUnits = () => {
  return useAtomValue(visiblePaceUnits);
};

export const useVisiblePaceUnitsSetter = () => {
  return useSetAtom(visiblePaceUnits);
};

export const pinnedLevelsAtom = atomWithStorage<number[]>(
  "pinnedLevelsAtom_v0",
  [],
);
