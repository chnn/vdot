import { useState } from "react";
import { Settings } from "./settings";
import { VdotTable } from "./vdot-table";
import { Button } from "./button";

export function App() {
  const [settingsVisible, setSettingsVisible] = useState(false);

  return (
    <div className="flex flex-col pt-3 w-full h-full bg-(--color-background)">
      <div className="shrink-0 justify-end mb-3 w-full pr-3 z-30 flex">
        <Button
          label="⚙️ Settings"
          onClick={() => setSettingsVisible(!settingsVisible)}
        />
        {settingsVisible && (
          <div className="border border-(--color-border) bg-(--color-background-higher) rounded py-4 px-8 absolute drop-shadow-xs top-[50px]">
            <Settings />
          </div>
        )}
      </div>
      <div className="overflow-scroll border-(--color-border) border-t">
        <VdotTable />
      </div>
    </div>
  );
}
