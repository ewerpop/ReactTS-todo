import { FunctionComponent } from "react";
import { CardLayout } from "./layout";
import { CardHeader } from "./ui/CardHeader";
import { CardBottom } from "./ui/CardBottom";
import { CardBody } from "./ui/CardBody";

interface Props {}

export const Card: FunctionComponent<Props> = () => {
  return (
    <CardLayout
      CardHeader={<CardHeader cardName="Some big guns and mor and more and more and more" />}
      CardBody={
        <CardBody cardText="test asfljsdflkasdfjasfd jlfdklalksdlk kdaslfj;lasdfj;kasdl; asdj;lkfj;aldskfjl;ds asdklfj oiweijf  ksajdfsakdjflasdfj lsdjlkf jskalf jl;asd l;jkasdkjlfl jkjklf; " />
      }
      CardBottom={<CardBottom addData="test" />}
    />
  );
};
