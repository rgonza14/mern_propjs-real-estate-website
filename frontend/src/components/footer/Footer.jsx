import { Container, Paragraph } from "../styled-components/utilities";
import "./footer.styles.css";

const Footer = () => {
    var year = new Date();

    return (
        <div className='footer'>
            <Container>
                <Paragraph color='#fff'>
                    &copy; Copyright {year.getFullYear()}, Propjs | Todos los
                    derechos reservados{" "}
                </Paragraph>
            </Container>
        </div>
    );
};

export default Footer;
