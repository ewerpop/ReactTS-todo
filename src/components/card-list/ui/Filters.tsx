import { FunctionComponent, useState } from "react";
import "../CardList.css";
import { RadioButtons } from "../../ui/radio-buttons";
import { SortBy } from "../../ui/sortby";

interface Props {
  onSort: (value: number) => void;
  onShow: (value: string) => void;
}

export const Filters: FunctionComponent<Props> = ({ onSort, onShow }) => {
  const [current, setCurrent] = useState<number>(1);
  return (
    <div className="filters">
      <RadioButtons
        onChange={(value) => {
          onShow(value);
          onSort(1);
          setCurrent(1);
        }}
        plans={["Все", "Выполненные", "Не выполненные"]}
      />
      <div>
        <SortBy
          onClick={onSort}
          current={current}
          setCurrent={setCurrent}
          label="По времени"
        />
      </div>
    </div>
  );
};
