import { FunctionComponent } from "react";
import { CardListLayout } from "./layout";
import { Card } from "../card/Card";
import { AddCardButton } from "./ui/AddCardButton";

interface Props {}

export const CardList: FunctionComponent<Props> = () => {
  return (
    <CardListLayout
    addCardButton={<AddCardButton onClick={() => {}}/>}
      cards={
        <>
          <Card />
          <Card />
          <Card />
          <Card />
        </>
      }
    />
  );
};
