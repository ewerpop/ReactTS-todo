import { FunctionComponent } from "react";
import '../Card.css'

interface Props {
    cardText: string
}
 
export const CardBody: FunctionComponent<Props> = ({cardText}) => {
    return (  
        <div className="cardBody">
            <div className="cardText">{cardText}</div>
        </div>
    );
}
 