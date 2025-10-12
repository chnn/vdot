import {
  RACE_DISTANCE_LABELS,
  RACE_DISTANCES,
  TRAINING_EFFORT_LABELS,
  TRAINING_EFFORTS,
} from "../lib/levels";
import {
  useVisiblePaceUnits,
  useVisiblePaceUnitsSetter,
  useVisibleRaceDistances,
  useVisibleRaceDistancesSetter,
  useVisibleTrainingEfforts,
  useVisibleTrainingEffortsSetter,
} from "../lib/atoms";
import { PACE_UNITS } from "../lib";
import { CheckboxFieldset } from "./checkbox-fieldset";

export function Settings() {
  const visiblePaceUnits = useVisiblePaceUnits();
  const setVisiblePaceUnits = useVisiblePaceUnitsSetter();

  const visibleRaceDistances = useVisibleRaceDistances();
  const setVisibleRaceDistances = useVisibleRaceDistancesSetter();

  const visibleTrainingEfforts = useVisibleTrainingEfforts();
  const setVisibleTrainingEfforts = useVisibleTrainingEffortsSetter();

  return (
    <div className="grid grid-cols-3 gap-x-8">
      <CheckboxFieldset
        label="Race Distances"
        values={visibleRaceDistances}
        options={RACE_DISTANCES.map((distance) => ({
          value: distance,
          label: RACE_DISTANCE_LABELS[distance],
        }))}
        onChange={(option) => {
          if (visibleRaceDistances.includes(option.value)) {
            setVisibleRaceDistances(
              visibleRaceDistances.filter((d) => d !== option.value),
            );
          } else {
            setVisibleRaceDistances([...visibleRaceDistances, option.value]);
          }
        }}
      />
      <CheckboxFieldset
        label="Training Efforts"
        values={visibleTrainingEfforts}
        options={TRAINING_EFFORTS.map((effort) => ({
          value: effort,
          label: TRAINING_EFFORT_LABELS[effort],
        }))}
        onChange={(option) => {
          if (visibleTrainingEfforts.includes(option.value)) {
            setVisibleTrainingEfforts(
              visibleTrainingEfforts.filter((e) => e !== option.value),
            );
          } else {
            setVisibleTrainingEfforts([
              ...visibleTrainingEfforts,
              option.value,
            ]);
          }
        }}
      />
      <CheckboxFieldset
        label="Pace Units"
        values={visiblePaceUnits}
        options={PACE_UNITS.map((unit) => ({
          value: unit,
          label: unit,
        }))}
        onChange={(option) => {
          if (visiblePaceUnits.includes(option.value)) {
            setVisiblePaceUnits(
              visiblePaceUnits.filter((u) => u !== option.value),
            );
          } else {
            setVisiblePaceUnits([...visiblePaceUnits, option.value]);
          }
        }}
      />
    </div>
  );
}
