import { FunctionComponent, useContext, useState } from "react";
import { CardLayout } from "./layout";
import { CardHeader } from "./ui/CardHeader";
import { CardBottom } from "./ui/CardBottom";
import { CardBody } from "./ui/CardBody";
import { StateContext } from "../../context";

interface Props {
  cardText: string;
  cardTitle: string;
  date: number;
  isEdit: boolean;
  id: string 
}

export const Card: FunctionComponent<Props> = ({
  cardText,
  cardTitle,
  date,
  isEdit,
  id
}) => {
    const {dispatch} = useContext(StateContext)
  const formatDate = new Date(date).toLocaleString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [newCardTitle, setNewCardTitle] = useState(cardTitle);
  const [newCardText, setNewCardText] = useState(cardText);
  const handleSubmit = () => {
    if (newCardText === '' || newCardTitle === '') return
    dispatch({type: "UPDATE_CARD", payload: {id: id, title: newCardTitle, text: newCardText, date: Date.now(), isEdit: false, isDone: false}})
  }
  return (
    <CardLayout
      CardHeader={
        <CardHeader onChangeCardTitle={setNewCardTitle} newCardTitle={newCardTitle} isEdit={isEdit} cardName={cardTitle} />
      }
      CardBody={
        <CardBody cardText={cardText} isEdit={isEdit} onChangeCardText={setNewCardText} newCardText={newCardText} />
      }
      CardBottom={<CardBottom onSubmit={handleSubmit} isEdit={isEdit} addData={formatDate} />}
    />
  );
};
