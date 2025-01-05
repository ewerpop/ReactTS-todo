import { FunctionComponent, useContext } from "react";
import { CardListLayout } from "./layout";
import { Card } from "../card/Card";
import { AddCardButton } from "./ui/AddCardButton";
import { Filters } from "./ui/Filters";
import { StateContext } from "../../context";
import { CardType } from "../../App";
import shortid from "shortid";

export const CardList: FunctionComponent = () => {
  const {state, dispatch} = useContext(StateContext);
  const handleAddCard = () => {
      dispatch({
          type: "ADD_CARD",
          payload: {
              id: shortid.generate(),
              title: '',
              text: '',
              date: Date.now(),
              isEdit: true,
              isDone: false
          }
      })
  }
  const handleSortByDate = (value: number) => {
    //небольшой костыль для сортировки, в id пишем что угодно, а в title я передаю направление сортировки
    dispatch({type: 'SORT_BY_DATE', payload: {id: 'doesnt_matter', title: String(value)}})
  }
  const handleShow = (value: string) => {
      if (value === 'Все') dispatch ({type: 'SHOW_ALL', payload: {id: 'doesnt_matter', title: 'doesnt_matter'}})
        if (value === 'Выполненные') dispatch ({type: 'SHOW_DONE', payload: {id: 'doesnt_matter', title: 'doesnt_matter'}})
        if (value === 'Не выполненные') dispatch ({type: 'SHOW_NOT_DONE', payload: {id: 'doesnt_matter', title: 'doesnt_matter'}})
  }
  return (
    <CardListLayout
      filters={<Filters onShow={handleShow} onSort={handleSortByDate} />}
      addCardButton={<AddCardButton onClick={handleAddCard} />}
      cards={state.map((card: CardType) => (
        <Card
          key={card.id}
          isDone={card.isDone || false}
          id={card.id}
          isEdit={card.isEdit || false}
          date={card.date || 345678}
          cardTitle={card.title || "title"}
          cardText={card.text || "text"}
        />
      ))}
    />
  );
};
