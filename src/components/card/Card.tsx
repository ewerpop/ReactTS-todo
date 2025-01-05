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
  id: string;
  isDone: boolean
}

export const Card: FunctionComponent<Props> = ({
  cardText,
  cardTitle,
  date,
  isEdit,
  id,
  isDone
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
  const handleCheck = () => {
    dispatch({type: 'CHANGE_DONE_STATUS', payload: {id: id}})
  }
  const handleDelete = () => {
      dispatch({type: 'DELETE_CARD', payload: {id: id}})
  }
  const handleEdit = () => {
      dispatch({type: 'SET_EDIT', payload: {id: id}})
  }
  return (
    <CardLayout
      CardHeader={
        <CardHeader handleEdit={handleEdit} handleDelete={handleDelete} onChangeCardTitle={setNewCardTitle} newCardTitle={newCardTitle} isEdit={isEdit} cardName={cardTitle} />
      }
      CardBody={
        <CardBody cardText={cardText} isEdit={isEdit} onChangeCardText={setNewCardText} newCardText={newCardText} />
      }
      CardBottom={<CardBottom isDone={isDone} onCheck={handleCheck} onSubmit={handleSubmit} isEdit={isEdit} addData={formatDate} />}
    />
  );
};
