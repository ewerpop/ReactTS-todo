import { FunctionComponent } from "react";
import "../CardList.css";
import { PlusIcon } from "../../ui/icons/PlusIcon";

interface Props {
    onClick: () => void
}

export const AddCardButton: FunctionComponent<Props> = ({onClick}) => {
  return (
    <button onClick={onClick} className="addCardButton">
      <div className="iconTextBlock">
        <div>
          <PlusIcon />
        </div>
        <div>Добавить задачу</div>
      </div>
    </button>
  );
};
