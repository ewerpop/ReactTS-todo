import { FunctionComponent } from "react";
import "../Card.css";
import { Check } from "../../ui/check";

interface Props {
  addData: string;
  isEdit: boolean;
  onSubmit: () => void
}

export const CardBottom: FunctionComponent<Props> = ({ addData, isEdit, onSubmit }) => {
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
      <Check onChange={() => {}} defaultState={false} />
    </div>
  );
};
