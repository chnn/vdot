import { useState } from "react";
import { Settings } from "./settings";
import { VdotTable } from "./vdot-table";

export function App() {
  const [settingsVisible, setSettingsVisible] = useState(false);

  return (
    <div className="flex flex-col gap-y-4 pt-4 w-full max-w-[1440px]">
      <div className="flex justify-end w-full pr-4 z-10">
        <button
          className="border border-zinc-200 rounded bg-zinc-50 py-1 px-2 hover:bg-zinc-100 active:bg-zinc-200 cursor-pointer"
          onClick={() => setSettingsVisible(!settingsVisible)}
        >
          Settings
        </button>
        {settingsVisible && (
          <div className="border border-gray-200 bg-white rounded py-4 px-8 absolute drop-shadow-sm top-[60px]">
            <Settings />
          </div>
        )}
      </div>
      <div className="w-full overflow-scroll">
        <VdotTable />
      </div>
    </div>
  );
}
