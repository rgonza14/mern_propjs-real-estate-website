import "./onsale.styles.css";
import {
    Box,
    Paragraph,
    Title
} from "../../../components/styled-components/utilities";
import Button from "../../../components/button/Button";
import { useNavigate } from "react-router-dom";

const OnSale = () => {
    const navigate = useNavigate();
    const onClickButton = () => {
        navigate("/contact");
    };

    return (
        <Box sx={{ display: "flex", gap: "10rem" }} className='onsale__wrapper'>
            <div className='onsale__wrapper-image'>{/* image on css */}</div>

            <div className='onsale__info'>
                <Title textAlign='left'>¿Deseas vender tu propiedad?</Title>
                <Paragraph mb='2.5rem' mt='2.5rem'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    vel elit condimentum, malesuada quam in, viverra ante.
                </Paragraph>

                <div className='button__wrapper'>
                    <Button
                        action={onClickButton}
                        style={{
                            background: "var(--light-blue)",
                            padding: "0.8em 2em"
                        }}
                        fontColor='#fff'
                    >
                        Contacto
                    </Button>
                </div>
            </div>
        </Box>
    );
};

export default OnSale;
