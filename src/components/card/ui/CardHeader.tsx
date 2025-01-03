import { FunctionComponent } from "react";
import '../Card.css'
import { OptionsMenu } from "../../ui/options-menu";

interface Props {
    cardName: string
}
 
export const CardHeader: FunctionComponent<Props> = ({cardName}) => {
    return (  
        <div className="cardHeader">
            <h1 className="cardTitle">{cardName}</h1>
            <OptionsMenu />
        </div>
    );
}
 