import { FunctionComponent } from "react";

interface Props {
  onClick: (value: number) => void;
  label: string;
  setCurrent: (value: number) => void
  current: number
}

export const SortBy: FunctionComponent<Props> = ({
  onClick,
  label,
  setCurrent,
  current
}) => {
    //1-сортировать вниз 2-сортировать вверх
    const handleClick = (state: number) => {
        setCurrent(state)
        onClick(state)
    }
  if (current === 1) {
    return (
        <p className="cursor-pointer" onClick={() => handleClick(2)}>{label}▼</p>
    )
  }
  return (
    <p className="cursor-pointer" onClick={() => handleClick(1)}>{label}▲</p>
  )
};
