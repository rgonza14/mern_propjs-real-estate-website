import { Paragraph } from "../styled-components/utilities";
import "./loader.styles.css";

const Loader = ({ message }) => {
    return (
        <div className='loader-wrapper'>
            <div className='loader'></div>
            <Paragraph mt='20px'>{message}</Paragraph>
        </div>
    );
};

export default Loader;
