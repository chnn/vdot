import { PACE_UNITS, RaceUnit } from "../lib";
import { usePaceUnit } from "../lib/atoms";
import { RaceDistance, VdotLevel } from "../lib/levels";
import { Duration } from "./duration";
import { Popover } from "./popover";

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
}: {
  level: VdotLevel;
  distance: RaceDistance;
}) => {
  const paceUnit = usePaceUnit();
  const totalTime = level.raceTimes[distance];

  const divisor = RACE_UNIT_TO_PACE_DIVISORS[distance];

  return (
    <>
      <div>
        <Duration value={totalTime} />
      </div>
      <div className="text-xs">
        <Duration value={totalTime / divisor} paceUnit={paceUnit} />
        <span className="text-[10px] text-gray-700">{paceUnit}</span>
      </div>
    </>
  );
};
