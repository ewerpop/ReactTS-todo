import { FunctionComponent, useState } from "react";
import { Field, Label, RadioGroup, Radio } from "@headlessui/react";

interface Props {
  onChange: (value: string) => void;
  plans: string[];
}

export const RadioButtons: FunctionComponent<Props> = ({ onChange, plans }) => {
    const [selected, setSelected] = useState(plans[0])
    const handleChange = (selected: string) => {
        setSelected(selected);
        onChange(selected);
    }
    return (
      <RadioGroup value={selected} onChange={handleChange} aria-label="Server size">
        {plans.map((plan) => (
          <Field key={plan} className="flex items-center gap-2">
            <Radio
              value={plan}
              className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
            >
              <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
            </Radio>
            <Label>{plan}</Label>
          </Field>
        ))}
      </RadioGroup>
    )
};
