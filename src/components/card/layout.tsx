import { FunctionComponent } from "react";
import './Card.css'

interface Props {
    CardHeader: React.ReactNode;
    CardBottom: React.ReactNode;
    CardBody: React.ReactNode;
}

export const CardLayout: FunctionComponent<Props> = ({CardHeader, CardBottom, CardBody}) => {
    return ( 
        <div className="card">
            {CardHeader}
            {CardBody}
            {CardBottom}
        </div>
    );
}