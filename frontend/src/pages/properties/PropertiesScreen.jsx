import "./propertiesScreen.styles.css";
import { useEffect } from "react";
import { Container, Title } from "../../components/styled-components/utilities";
import { usePropertyStore } from "../../hooks/usePropertyStore";
import GridProperties from "../../components/grid/GridProperties";

const PropertiesScreen = () => {
    const { startLoadingProperties } = usePropertyStore();

    useEffect(() => {
        startLoadingProperties();
    }, []);

    return (
        <Container>
            <Title>Propiedades disponibles</Title>
            <GridProperties />
        </Container>
    );
};

export default PropertiesScreen;
