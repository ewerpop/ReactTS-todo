import { FunctionComponent } from "react";
import "../Card.css";
import { OptionsMenu } from "../../ui/options-menu";

interface Props {
  cardName: string;
  isEdit: boolean;
  newCardTitle: string
  onChangeCardTitle: (value: string) => void
  handleDelete: () => void
  handleEdit: () => void
}

export const CardHeader: FunctionComponent<Props> = ({ cardName, isEdit, onChangeCardTitle, newCardTitle, handleDelete, handleEdit }) => {
  if (isEdit) {
    return (
      <div className="cardHeader">
        <input className="cardTitleEdit" onChange={(e) => onChangeCardTitle(e.target.value)} value={newCardTitle}/>
      </div>
    );
  }
  return (
    <div className="cardHeader">
      <h1 className="cardTitle">{cardName}</h1>
      <OptionsMenu handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  );
};
