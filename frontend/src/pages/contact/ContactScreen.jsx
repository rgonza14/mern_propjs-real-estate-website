import "./contact.styles.css";
import {
    HiOutlineLocationMarker,
    HiOutlineMail,
    HiOutlinePhone
} from "react-icons/hi";
import FormContact from "../../components/form/contact/FormContact";
import { getEnvVariables } from "../../helpers/getEnvVariables";
import {
    Container,
    Paragraph,
    Title
} from "../../components/styled-components/utilities";

const coords = { lat: -34.7205586, lng: -58.4326872 };
const { VITE_GOOGLE_MAPS_API_KEY } = getEnvVariables();

const ContactScreen = () => {
    return (
        <Container>
            <Title textAlign='center'>Contactate con nosotros!</Title>
            <div className='contact-wrapper'>
                <div className='contact-info'>
                    <div className='contact-info__box'>
                        <HiOutlineLocationMarker size={25} />
                        <Paragraph>
                            Filardi 946, Lomas de Zamora, Buenos Aires
                        </Paragraph>
                    </div>
                    <div className='contact-info__box'>
                        <HiOutlineMail size={25} />
                        <Paragraph>bienesraices@correo.com</Paragraph>
                    </div>
                    <div className='contact-info__box'>
                        <HiOutlinePhone size={25} />
                        <Paragraph>+54 9 11 2388-1231</Paragraph>
                    </div>
                    <img
                        src={`https://maps.googleapis.com/maps/api/staticmap?markers=${coords.lat},${coords.lng}&center=${coords.lat},${coords.lng}&zoom=18&size=400x400&key=${VITE_GOOGLE_MAPS_API_KEY}`}
                        alt='mapa estatico'
                        className='contact-info__map'
                        loading='lazy'
                    />
                </div>

                <FormContact />
            </div>
        </Container>
    );
};

export default ContactScreen;
