import { atom, useAtomValue } from "jotai";
import { RaceDistance, TrainingEffort } from "./levels";
import { PaceUnit } from ".";

export const raceDistanceVisibilityAtom = atom<Record<RaceDistance, boolean>>({
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
    .filter(([k, v]) => v)
    .map(([k, v]) => k) as RaceDistance[];
};

export const trainingEffortsVisibilityAtom = atom<
  Record<TrainingEffort, boolean>
>({
  easy: true,
  marathon: true,
  threshold: true,
  interval: true,
  repetitions: true,
});

export const useVisibleTrainingEfforts = () => {
  const trainingEffortVisibility = useAtomValue(trainingEffortsVisibilityAtom);

  return Object.entries(trainingEffortVisibility)
    .filter(([k, v]) => v)
    .map(([k, v]) => k) as TrainingEffort[];
};

export const paceUnitAtom = atom<PaceUnit>("min / mi");

export const usePaceUnit = () => useAtomValue(paceUnitAtom);
