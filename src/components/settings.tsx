import {
  RACE_DISTANCE_LABELS,
  RACE_DISTANCES,
  TRAINING_EFFORT_LABELS,
  TRAINING_EFFORTS,
} from "../lib/levels";
import { useAtom } from "jotai";
import {
  paceUnitVisibilityAtom,
  raceDistanceVisibilityAtom,
  trainingEffortsVisibilityAtom,
  useVisiblePaceUnits,
  useVisiblePaceUnitsSetter,
} from "../lib/atoms";
import { PACE_UNITS } from "../lib";
import { CheckboxFieldset } from "./checkbox-fieldset";

export function Settings() {
  const [raceDistanceVisibility, setRaceDistanceVisibility] = useAtom(
    raceDistanceVisibilityAtom,
  );

  const [paceUnitVisibility, setPaceUnitVisibility] = useAtom(
    paceUnitVisibilityAtom,
  );

  const visiblePaceUnits = useVisiblePaceUnits();
  const setVisiblePaceUnits = useVisiblePaceUnitsSetter();

  const [trainingEffortsVisibility, setTrainingEffortsVisbility] = useAtom(
    trainingEffortsVisibilityAtom,
  );

  return (
    <div className="flex flex-col">
      <CheckboxFieldset
        label="Pace Units"
        values={visiblePaceUnits}
        options={PACE_UNITS.map((unit) => ({
          value: unit,
          label: unit,
        }))}
        onChange={(option) =>
          setVisiblePaceUnits([...visiblePaceUnits, option.value])
        }
      />
      <fieldset>
        <legend className="font-bold">Pace Units</legend>
        {PACE_UNITS.map((d) => (
          <div className="flex items-center" key={d}>
            <input
              className="mr-2"
              type="checkbox"
              id={d}
              value={d}
              checked={paceUnitVisibility[d]}
              onChange={(_) =>
                setPaceUnitVisibility({
                  ...paceUnitVisibility,
                  [d]: !paceUnitVisibility[d],
                })
              }
            />
            <label htmlFor={d}>{d}</label>
          </div>
        ))}
      </fieldset>
      <fieldset>
        <legend className="font-bold">Race Distances</legend>
        {RACE_DISTANCES.map((d) => (
          <div className="flex items-center" key={d}>
            <input
              className="mr-2"
              type="checkbox"
              id={d}
              value={d}
              checked={raceDistanceVisibility[d]}
              onChange={(_) =>
                setRaceDistanceVisibility({
                  ...raceDistanceVisibility,
                  [d]: !raceDistanceVisibility[d],
                })
              }
            />
            <label htmlFor={d}>{RACE_DISTANCE_LABELS[d]}</label>
          </div>
        ))}
      </fieldset>
      <fieldset>
        <legend className="font-bold">Training Efforts</legend>
        {TRAINING_EFFORTS.map((d) => (
          <div className="flex items-center" key={d}>
            <input
              className="mr-2"
              type="checkbox"
              id={d}
              value={d}
              checked={trainingEffortsVisibility[d]}
              onChange={(_) =>
                setTrainingEffortsVisbility({
                  ...trainingEffortsVisibility,
                  [d]: !trainingEffortsVisibility[d],
                })
              }
            />
            <label htmlFor={d}>{TRAINING_EFFORT_LABELS[d]}</label>
          </div>
        ))}
      </fieldset>
    </div>
  );
}
