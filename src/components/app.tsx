import { useState } from "react";
import { Settings } from "./settings";
import { VdotTable } from "./vdot-table";
import { Button } from "./button";

export function App() {
  const [settingsVisible, setSettingsVisible] = useState(false);

  return (
    <div className="flex flex-col gap-y-4 pt-4 w-full max-w-[1440px]">
      <div className="flex justify-end w-full pr-4 z-10">
        <Button
          label="⚙️ Settings"
          onClick={() => setSettingsVisible(!settingsVisible)}
        />
        {settingsVisible && (
          <div className="border border-gray-200 bg-white rounded py-4 px-8 absolute drop-shadow-xs top-[60px]">
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
