import React from "react";
import {
  RACE_DISTANCE_LABELS,
  RACE_DISTANCES,
  RaceDistance,
} from "../lib/levels";
import { useAtom } from "jotai";
import { paceUnitAtom, raceDistanceVisibilityAtom } from "../lib/atoms";
import { PACE_UNITS, PaceUnit } from "../lib";

export function Settings() {
  const [raceDistanceVisibility, setRaceDistanceVisibility] = useAtom(
    raceDistanceVisibilityAtom,
  );

  const [paceUnit, setPaceUnit] = useAtom(paceUnitAtom);

  return (
    <div className="flex flex-col gap-2">
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
              onChange={(e) =>
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
      <div>
        <label className="block font-bold">Pace Unit</label>
        <select
          value={paceUnit}
          onChange={(e) => setPaceUnit(e.target.value as PaceUnit)}
        >
          {PACE_UNITS.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
