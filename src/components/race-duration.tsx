import { PACE_UNITS, RaceUnit } from "../lib";
import { RaceDistance, VdotLevel } from "../lib/levels";
import { Duration } from "./duration";
import { Popover } from "./popover";
import { Button } from "react-aria-components";

import styles from "./race-duration.module.css";

const RACE_UNIT_TO_PACE_DIVISORS: Record<RaceDistance, number> = {
  "1 mi": 1,
  "3000 m": 1.8641135767,
  "2 mi": 2,
  "5 km": 3.1068559612,
  "10 km": 6.2137119224,
  "15 km": 9.3205678836,
  "half marathon": 13.1093787282,
  marathon: 26.2187574565,
};

export const RaceDuration = ({
  level,
  distance,
  unit,
}: {
  level: VdotLevel;
  distance: RaceDistance;
  unit: RaceUnit;
}) => {
  const duration = level.raceTimes[distance];
  const divisor =
    unit === "Total Time" ? 1 : RACE_UNIT_TO_PACE_DIVISORS[distance];
  const paceUnit = unit === "Total Time" ? undefined : unit;

  return (
    <Popover
      trigger={
        <Button className={styles.trigger}>
          <Duration value={duration / divisor} paceUnit={paceUnit} />
        </Button>
      }
      content={
        <table>
          <tbody>
            {PACE_UNITS.map((paceUnit) => (
              <tr key={paceUnit}>
                <td>
                  <Duration
                    value={duration / RACE_UNIT_TO_PACE_DIVISORS[distance]}
                    paceUnit={paceUnit}
                  />
                </td>
                <td>{paceUnit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    />
  );
};
