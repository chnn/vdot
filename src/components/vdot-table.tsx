import { useState } from "react";
import { PaceUnit, RaceUnit, PACE_UNITS } from "../lib";
import { Duration } from "./duration";
import classes from "./vdot-table.module.css";
import {
  LEVELS,
  RACE_DISTANCE_LABELS,
  RaceDistance,
  TRAINING_EFFORT_LABELS,
} from "../lib/levels";
import { RaceDuration } from "./race-duration";
import { useAtom } from "jotai";
import {
  raceDistanceVisibilityAtom,
  usePaceUnit,
  useVisibleRaceDistances,
  useVisibleTrainingEfforts,
} from "../lib/atoms";

export const VdotTable = () => {
  const paceUnit = usePaceUnit();

  const visibleRaceDistances = useVisibleRaceDistances();
  const visibleTrainingEfforts = useVisibleTrainingEfforts();

  return (
    <table className={classes.table}>
      <thead className={classes.tableHeader}>
        <tr>
          <th
            colSpan={visibleRaceDistances.length + 1}
            className={classes.tableTopCell}
          >
            Race Times
          </th>
          <th
            colSpan={visibleTrainingEfforts.length}
            className={classes.tableTopCell}
          >
            Training Paces
          </th>
        </tr>
        <tr>
          <th>VDOT</th>
          <>
            {visibleRaceDistances.map((d) => (
              <th key={d}>{RACE_DISTANCE_LABELS[d]}</th>
            ))}
          </>
          <>
            {visibleTrainingEfforts.map((d) => (
              <th key={d}>{TRAINING_EFFORT_LABELS[d]}</th>
            ))}
          </>
        </tr>
      </thead>
      <tbody>
        {Object.values(LEVELS).map((d) => (
          <tr key={d.level}>
            <td>
              <b>{d.level}</b>
            </td>
            <>
              {visibleRaceDistances.map((distance) => (
                <td key={distance}>
                  <RaceDuration level={d} distance={distance} unit={paceUnit} />
                </td>
              ))}
            </>
            <>
              {visibleTrainingEfforts.map((effort) => (
                <td key={effort}>
                  <Duration
                    value={d.trainingPaces[effort]}
                    paceUnit={paceUnit}
                  />
                </td>
              ))}
            </>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
