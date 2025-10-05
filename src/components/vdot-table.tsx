import { Duration } from "./duration";
import classes from "./vdot-table.module.css";
import {
  LEVELS,
  RACE_DISTANCE_LABELS,
  TRAINING_EFFORT_LABELS,
} from "../lib/levels";
import { RaceDuration } from "./race-duration";
import {
  useVisiblePaceUnits,
  useVisibleRaceDistances,
  useVisibleTrainingEfforts,
} from "../lib/atoms";

export const VdotTable = () => {
  const visiblePaceUnits = useVisiblePaceUnits();
  const visibleRaceDistances = useVisibleRaceDistances();
  const visibleTrainingEfforts = useVisibleTrainingEfforts();

  return (
    <table className={classes.table}>
      <thead>
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
          <tr key={d.level} className="">
            <td>
              <b>{d.level}</b>
            </td>
            <>
              {visibleRaceDistances.map((distance) => (
                <td key={distance}>
                  <RaceDuration
                    level={d}
                    distance={distance}
                    paceUnits={visiblePaceUnits}
                  />
                </td>
              ))}
            </>
            <>
              {visibleTrainingEfforts.map((effort) => (
                <td key={effort}>
                  {visiblePaceUnits.map((paceUnit) => (
                    <div key={paceUnit}>
                      <Duration
                        value={d.trainingPaces[effort]}
                        paceUnit={paceUnit}
                      />
                    </div>
                  ))}
                </td>
              ))}
            </>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
