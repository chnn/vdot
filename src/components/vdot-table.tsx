import { useState } from "react";
import {
  PACES,
  PaceUnit,
  PACE_UNITS,
  formatDuration,
  RaceUnit,
  RACE_UNIT_TO_PACE_DIVISORS,
  RaceDistance,
  VdotInfo,
} from "../lib";
import { Duration } from "./duration";
import "./vdot-table.css";

const RaceValue = ({
  info,
  distance,
  unit,
}: {
  info: VdotInfo;
  distance: RaceDistance;
  unit: RaceUnit;
}) => {
  const duration = info.raceTimes[distance];
  const divisor =
    unit === "Total Time" ? 1 : RACE_UNIT_TO_PACE_DIVISORS[distance];
  const paceUnit = unit === "Total Time" ? undefined : unit;

  return <Duration value={duration / divisor} paceUnit={paceUnit} />;
};

export const VdotTable = () => {
  const [raceUnit, setRaceUnit] = useState<RaceUnit>("Total Time");
  const [trainingUnit, setTrainingUnit] = useState<PaceUnit>("min / mi");

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={9} style={{ textAlign: "center" }}>
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
          <th colSpan={9} style={{ textAlign: "center" }}>
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
        {Object.values(PACES).map((d) => (
          <tr key={d.vdot}>
            <td>
              <b>{d.vdot}</b>
            </td>
            <td>
              <RaceValue info={d} distance="1 mi" unit={raceUnit} />
            </td>
            <td>
              <RaceValue info={d} distance="3000 m" unit={raceUnit} />
            </td>
            <td>
              <RaceValue info={d} distance="2 mi" unit={raceUnit} />
            </td>
            <td>
              <RaceValue info={d} distance="5 km" unit={raceUnit} />
            </td>
            <td>
              <RaceValue info={d} distance="10 km" unit={raceUnit} />
            </td>
            <td>
              <RaceValue info={d} distance="15 km" unit={raceUnit} />
            </td>
            <td>
              <RaceValue info={d} distance="half marathon" unit={raceUnit} />
            </td>
            <td>
              <RaceValue info={d} distance="marathon" unit={raceUnit} />
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
