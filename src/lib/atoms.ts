import { useAtomValue, useSetAtom } from "jotai";
import { RaceDistance, TrainingEffort } from "./levels";
import { PaceUnit } from ".";
import { atomWithStorage } from "jotai/utils";

const visibleRaceDistances = atomWithStorage<RaceDistance[]>(
  "raceDistanceVisibilityAtom_v1",
  ["1 mi", "5 km", "10 km", "half marathon", "marathon"],
);

export const useVisibleRaceDistances = () => {
  return useAtomValue(visibleRaceDistances);
};

export const useVisibleRaceDistancesSetter = () => {
  return useSetAtom(visibleRaceDistances);
};

const visibleTrainingEfforts = atomWithStorage<TrainingEffort[]>(
  "trainingEffortsVisibilityAtom_v1",
  ["easy", "marathon", "threshold", "interval", "repetitions"],
);

export const useVisibleTrainingEfforts = () => {
  return useAtomValue(visibleTrainingEfforts);
};

export const useVisibleTrainingEffortsSetter = () => {
  return useSetAtom(visibleTrainingEfforts);
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
