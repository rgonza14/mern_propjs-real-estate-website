import "./hero.styles.css";
import {
    Container,
    Paragraph,
    Title
} from "../../../components/styled-components/utilities";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/Button";

const Hero = () => {
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate("/properties");
    };

    return (
        <div className='hero'>
            <div className='hero__info'>
                <Title
                    color='#fff'
                    fontSize='35px'
                    fontWeight='100'
                    textAlign='center'
                >
                    Encuentra la casa de tus sueños
                </Title>
                <Container>
                    <Paragraph color='#fff' mb='40px'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam pretium tortor in purus elementum placerat.
                        Suspendisse potenti.
                    </Paragraph>
                    <div className='hero__button-wrapper'>
                        <Button
                            action={onClickButton}
                            style={{
                                background: "var(--light-blue)",
                                padding: "0.8em 2em",
                                textAlign: "center"
                            }}
                            fontColor='#fff'
                        >
                            Ver Propiedades
                        </Button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Hero;
