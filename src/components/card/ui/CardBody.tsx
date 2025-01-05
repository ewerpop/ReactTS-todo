import { FunctionComponent } from "react";
import '../Card.css'

interface Props {
    cardText: string
    isEdit: boolean
    onChangeCardText: (value: string) => void
    newCardText: string
}
 
export const CardBody: FunctionComponent<Props> = ({cardText, isEdit, onChangeCardText, newCardText}) => {
    if (isEdit) {
        return (  
            <div className="cardBody">
                <textarea value={newCardText} onChange={(e) => onChangeCardText(e.target.value)} className="cardEditText" />
            </div>
        );
    }
    return (  
        <div className="cardBody">
            <div className="cardText">{cardText}</div>
        </div>
    );
}
 