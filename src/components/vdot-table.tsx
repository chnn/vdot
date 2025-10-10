import { Duration } from "./duration";
import classes from "./vdot-table.module.css";
import {
  LEVELS,
  RACE_DISTANCE_LABELS,
  TRAINING_EFFORT_LABELS,
} from "../lib/levels";
import { RaceDuration } from "./race-duration";
import {
  pinnedLevelsAtom,
  useVisiblePaceUnits,
  useVisibleRaceDistances,
  useVisibleTrainingEfforts,
} from "../lib/atoms";
import { useAtom } from "jotai";
import { memo } from "react";

export const VdotTable = memo(() => {
  const visiblePaceUnits = useVisiblePaceUnits();
  const visibleRaceDistances = useVisibleRaceDistances();
  const visibleTrainingEfforts = useVisibleTrainingEfforts();

  const [pinnedLevels, setPinnedLevels] = useAtom(pinnedLevelsAtom);

  const levels = [
    ...pinnedLevels.map((pinnedLevel) => LEVELS[pinnedLevel]).toSorted(),
    ...Object.values(LEVELS),
  ].filter((level) => level != null);

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
        {levels.map((d, i) => {
          const isPinned = pinnedLevels.includes(d.level);

          return (
            <tr
              key={`${d.level}-${i}`}
              className={`group ${isPinned ? classes.pinnedRow : ""}`}
            >
              <td>
                <button
                  className={`cursor-pointer pr-2  ${isPinned ? "opacity-100" : "group-hover:opacity-60 hover:opacity-100 opacity-0"} `}
                  onClick={() => {
                    if (isPinned) {
                      setPinnedLevels(
                        pinnedLevels.filter((level) => level !== d.level),
                      );
                    } else {
                      setPinnedLevels([...pinnedLevels, d.level]);
                    }
                  }}
                >
                  <span>⭐</span>
                </button>
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
          );
        })}
      </tbody>
    </table>
  );
});
