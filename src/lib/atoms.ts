import { useAtomValue } from "jotai";
import { RaceDistance, TrainingEffort } from "./levels";
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

export const paceUnitVisibilityAtom = atomWithStorage<
  Record<PaceUnit, boolean>
>("paceUnitVisibilityAtom_v0", {
  "min / mi": true,
  "min / km": false,
  "min / 800m": false,
  "min / 400m": false,
  "min / 200m": false,
});

export const useVisiblePaceUnits = () => {
  const paceUnitVisibility = useAtomValue(paceUnitVisibilityAtom);

  return Object.entries(paceUnitVisibility)
    .filter(([_, v]) => v)
    .map(([k, _]) => k) as PaceUnit[];
};
