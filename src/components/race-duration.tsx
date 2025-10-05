import { PaceUnit } from "../lib";
import { RaceDistance, VdotLevel } from "../lib/levels";
import { Duration } from "./duration";

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
  paceUnits,
}: {
  level: VdotLevel;
  distance: RaceDistance;
  paceUnits: PaceUnit[];
}) => {
  const totalTime = level.raceTimes[distance];
  const divisor = RACE_UNIT_TO_PACE_DIVISORS[distance];

  return (
    <>
      <div>
        <Duration value={totalTime} />
      </div>
      {paceUnits.map((paceUnit) => (
        <div key={paceUnit} className="text-xs">
          <span className="text-[10px] text-gray-600">=</span>{" "}
          <Duration value={totalTime / divisor} paceUnit={paceUnit} />
        </div>
      ))}
    </>
  );
};
