import { useState } from "react";
import { PaceUnit, RaceUnit, PACE_UNITS } from "../lib";
import { Duration } from "./duration";
import classes from "./vdot-table.module.css";
import { Popover } from "./popover";
import { Button } from "react-aria-components";
import { LEVELS } from "../lib/levels";
import { RaceDuration } from "./race-duration";

export const VdotTable = () => {
  const [raceUnit, setRaceUnit] = useState<RaceUnit>("Total Time");
  const [trainingUnit, setTrainingUnit] = useState<PaceUnit>("min / mi");

  return (
    <table className={classes.table}>
      <thead className={classes.tableHeader}>
        <tr>
          <th colSpan={9} className={classes.tableTopCell}>
            Race Times
            <select
              value={raceUnit}
              style={{ marginLeft: 5 }}
              onChange={(e) => setRaceUnit(e.target.value as PaceUnit)}
            >
              <option value="Total Time">Total Time</option>
              {PACE_UNITS.map((unit) => (
                <option key={unit} value={unit}>
                  Pace ({unit})
                </option>
              ))}
            </select>
          </th>
          <th colSpan={9} className={classes.tableTopCell}>
            Training Paces
            <select
              value={trainingUnit}
              style={{ marginLeft: 5 }}
              onChange={(e) => setTrainingUnit(e.target.value as PaceUnit)}
            >
              {PACE_UNITS.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </th>
        </tr>
        <tr>
          <th>VDOT</th>
          <th>1 mi</th>
          <th>3000 m</th>
          <th>2 mi</th>
          <th>5 km</th>
          <th>10 km</th>
          <th>15 km</th>
          <th>Half Marathon</th>
          <th>Marathon</th>
          <th>Easy</th>
          <th>Marathon</th>
          <th>Threshold</th>
          <th>Interval</th>
          <th>Repetitions</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(LEVELS).map((d) => (
          <tr key={d.level}>
            <td>
              <b>{d.level}</b>
            </td>
            <td>
              <RaceDuration level={d} distance="1 mi" unit={raceUnit} />
            </td>
            <td>
              <RaceDuration level={d} distance="3000 m" unit={raceUnit} />
            </td>
            <td>
              <RaceDuration level={d} distance="2 mi" unit={raceUnit} />
            </td>
            <td>
              <RaceDuration level={d} distance="5 km" unit={raceUnit} />
            </td>
            <td>
              <RaceDuration level={d} distance="10 km" unit={raceUnit} />
            </td>
            <td>
              <RaceDuration level={d} distance="15 km" unit={raceUnit} />
            </td>
            <td>
              <RaceDuration
                level={d}
                distance="half marathon"
                unit={raceUnit}
              />
            </td>
            <td>
              <RaceDuration level={d} distance="marathon" unit={raceUnit} />
            </td>
            <td>
              <Duration
                value={d.trainingPaces["easy"]}
                paceUnit={trainingUnit}
              />
            </td>
            <td>
              <Duration
                value={d.trainingPaces["marathon"]}
                paceUnit={trainingUnit}
              />
            </td>
            <td>
              <Duration
                value={d.trainingPaces["threshold"]}
                paceUnit={trainingUnit}
              />
            </td>
            <td>
              <Duration
                value={d.trainingPaces["interval"]}
                paceUnit={trainingUnit}
              />
            </td>
            <td>
              <Duration
                value={d.trainingPaces["repetitions"]}
                paceUnit={trainingUnit}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
