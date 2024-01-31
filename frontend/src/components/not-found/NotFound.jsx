import "./notFound.styles.css";
import ImageNotFound from "./../../assets/images/404.png";
import { Title } from "../styled-components/utilities";

const NotFound = () => {
    return (
        <div className='not-found'>
            <img
                className='not-found__image'
                src={ImageNotFound}
                alt='imagen de pagina no encontrada'
            />
            <Title color='#000' marginBottom='10px' marginTop='0px'>
                Página no encontrada...
            </Title>
            <a style={{ fontSize: "14px" }} href='https://storyset.com/web'>
                Web illustrations by Storyset
            </a>
        </div>
    );
};

export default NotFound;

/*  */
