import "./home.styles.css";
import OnSale from "./onsale/OnSale";
import LatestProperties from "./latest-properties/LatestProperties";
import Hero from "./hero/Hero";
import BannerSteps from "./banner-steps/BannerSteps";
import { Container, Box } from "../../components/styled-components/utilities";

const HomeScreen = () => {
    return (
        <div>
            <Hero />

            <Container>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8rem",
                        marginTop: "4rem"
                    }}
                >
                    <BannerSteps />
                    <LatestProperties />
                    <OnSale />
                </Box>
            </Container>
        </div>
    );
};

export default HomeScreen;
