import "./gridProperties.styles.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Paragraph } from "../styled-components/utilities";

const NotResults = () => {
    return (
        <div className='not-results'>
            <Paragraph fontSize='20px'>
                No hay propiedades agregadas actualmente
            </Paragraph>
        </div>
    );
};

export default NotResults;
