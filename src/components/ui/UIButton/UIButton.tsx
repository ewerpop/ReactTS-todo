import { FunctionComponent } from "react";
import { Button } from "@headlessui/react";

interface Props {
  onClick: () => void;
  label: string
}

export const UIButton: FunctionComponent<Props> = ({ onClick, label }) => {
  return (
    <Button onClick={onClick} className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
      {label}
    </Button>
  );
};
