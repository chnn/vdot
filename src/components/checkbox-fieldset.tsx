import { useId, useMemo } from "react";
import { Txt } from "./txt";

export function CheckboxFieldset<
  TOption extends { value: string; label: string },
>({
  label,
  values,
  options,
  onChange,
}: {
  label: string;
  values: string[] | Set<string>;
  options: TOption[];
  onChange: (option: TOption) => void;
}) {
  const id = useId();
  const valueSet = useMemo(() => new Set(values), [values]);

  return (
    <fieldset>
      <legend className="font-bold text-base">
        <Txt>{label}</Txt>
      </legend>
      {options.map((d) => (
        <div className="flex items-center" key={d.value}>
          <input
            className="mr-2"
            type="checkbox"
            id={`${id}-${d.value}`}
            value={d.value}
            checked={valueSet.has(d.value)}
            onChange={(_) => onChange(d)}
          />
          <label className="text-base" htmlFor={`${id}-${d.value}`}>
            <Txt>{d.label}</Txt>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
