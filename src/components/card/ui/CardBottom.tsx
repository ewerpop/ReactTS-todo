import { FunctionComponent } from "react";
import '../Card.css'
import { Check } from "../../ui/check";

interface Props {
    addData: string
}
 
export const CardBottom: FunctionComponent<Props> = ({addData}) => {
    return (  
        <div className="cardBottom">
            <div className="cardData">{addData}</div>
            <Check onChange={() => {}} defaultState={false} />
        </div>
    );
}
 