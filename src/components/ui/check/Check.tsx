import { FunctionComponent, useState } from "react";
import { Checkbox } from "@headlessui/react";

interface Props {
  onChange: () => void;
  defaultState: boolean;
}

export const Check: FunctionComponent<Props> = ({ onChange, defaultState }) => {
  const [enabled, setEnabled] = useState(defaultState);
  const handleChange = () => {
    setEnabled(!enabled);
    onChange();
  };
  return (
    <div className="flex items-center justify-center">
      <Checkbox
        checked={enabled}
        onChange={handleChange}
        className="group block size-4 w-6 h-6 rounded border-2 bg-white data-[checked]:bg-blue-500"
      >
        {/* Checkmark icon */}
        <svg
          className="stroke-white opacity-0 group-data-[checked]:opacity-100"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Checkbox>
    </div>
  );
};
