import { FunctionComponent } from "react";
import './CardList.css'

interface Props {
    cards: React.ReactNode
    addCardButton: React.ReactNode
}

export const CardListLayout: FunctionComponent<Props> = ({cards, addCardButton}) => {
    return ( 
        <div className="cardList">
            {addCardButton}
            {cards}
        </div>
    );
}