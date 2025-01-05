import { FunctionComponent } from "react";
import "../Card.css";
import { Check } from "../../ui/check";

interface Props {
  addData: string;
  isEdit: boolean;
  onSubmit: () => void
  onCheck: (value: boolean) => void;
  isDone: boolean
}

export const CardBottom: FunctionComponent<Props> = ({ addData, isEdit, onSubmit, onCheck, isDone }) => {
  if (isEdit) {
    return (
      <div className="cardBottom">
        <div className="cardData">{addData}</div>
        <button className="saveButton" onClick={onSubmit}>Сохранить</button>
      </div>
    );
  }
  return (
    <div className="cardBottom">
      <div className="cardData">{addData}</div>
      <Check onChange={onCheck} defaultState={isDone} />
    </div>
  );
};
