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
  console.log(shortid.generate());
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
  return (
    <CardListLayout
      filters={<Filters onClick={() => {}} />}
      addCardButton={<AddCardButton onClick={handleAddCard} />}
      cards={state.map((card: CardType) => (
        <Card
          key={card.id}
          id={card.id}
          isEdit={card.isEdit}
          date={card.date}
          cardTitle={card.title}
          cardText={card.text}
        />
      ))}
    />
  );
};
