import { FunctionComponent } from "react";
import './CardList.css'

interface Props {
    cards: React.ReactNode
    addCardButton: React.ReactNode
    filters: React.ReactNode
}

export const CardListLayout: FunctionComponent<Props> = ({cards, addCardButton, filters}) => {
    return ( 
        <div className="cardList">
            {filters}
            {addCardButton}
            {cards}
        </div>
    );
}