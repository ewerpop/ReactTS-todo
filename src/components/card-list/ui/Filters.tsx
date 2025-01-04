import { FunctionComponent } from "react";
import "../CardList.css";
import { RadioButtons } from "../../ui/radio-buttons";
import { SortBy } from "../../ui/sortby";

interface Props {
    onClick: () => void
}

export const Filters: FunctionComponent<Props> = ({onClick}) => {
  return (
    <div className="filters">
        <RadioButtons onChange={(value) => console.log(value)} plans={['Все', 'Выполненные', 'Не выполненные']} />
        <div>
            <SortBy onClick={(value) => console.log(value)} label="По времени" defaultCurrent={1} />
        </div>
    </div>
  );
};