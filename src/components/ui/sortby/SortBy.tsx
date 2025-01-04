import { FunctionComponent, useState } from "react";

interface Props {
  onClick: (value: number) => void;
  label: string;
  defaultCurrent: 1|2;
}

export const SortBy: FunctionComponent<Props> = ({
  onClick,
  label,
  defaultCurrent,
}) => {
    //1-сортировать вниз 2-сортировать вверх
    const handleClick = (state: number) => {
        setCurrent(state)
        onClick(state)
    }
  const [current, setCurrent] = useState<number>(defaultCurrent);
  if (current === 1) {
    return (
        <p className="cursor-pointer" onClick={() => handleClick(2)}>{label}▼</p>
    )
  }
  return (
    <p className="cursor-pointer" onClick={() => handleClick(1)}>{label}▲</p>
  )
};
