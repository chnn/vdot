import { useState } from "react";
import "./app.css";
import { PACES, PaceUnit, PACE_UNITS, formatDuration } from "../lib";

function Pace({
  secondsPerMile,
  unit,
}: {
  secondsPerMile: number | [number, number];
  unit: PaceUnit;
}) {
  return <span>{formatDuration(secondsPerMile, unit)}</span>;
}

export function App() {
  const [paceUnit, setPaceUnit] = useState<PaceUnit>("min / mi");

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colSpan={9} style={{ textAlign: "center" }}>
              Race Times
            </th>
            <th colSpan={9} style={{ textAlign: "center" }}>
              Training Paces
              <select
                value={paceUnit}
                style={{ marginLeft: 5 }}
                onChange={(e) => setPaceUnit(e.target.value as PaceUnit)}
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
              <td>{formatDuration(d.raceTimes["1 mi"])}</td>
              <td>{formatDuration(d.raceTimes["3000 m"])}</td>
              <td>{formatDuration(d.raceTimes["2 mi"])}</td>
              <td>{formatDuration(d.raceTimes["5 km"])}</td>
              <td>{formatDuration(d.raceTimes["10 km"])}</td>
              <td>{formatDuration(d.raceTimes["15 km"])}</td>
              <td>{formatDuration(d.raceTimes["half marathon"])}</td>
              <td>{formatDuration(d.raceTimes["marathon"])}</td>
              <td>
                <Pace
                  secondsPerMile={d.trainingPaces["easy"]}
                  unit={paceUnit}
                />
              </td>
              <td>
                <Pace
                  secondsPerMile={d.trainingPaces["marathon"]}
                  unit={paceUnit}
                />
              </td>
              <td>
                <Pace
                  secondsPerMile={d.trainingPaces["threshold"]}
                  unit={paceUnit}
                />
              </td>
              <td>
                <Pace
                  secondsPerMile={d.trainingPaces["interval"]}
                  unit={paceUnit}
                />
              </td>
              <td>
                <Pace
                  secondsPerMile={d.trainingPaces["repetitions"]}
                  unit={paceUnit}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
