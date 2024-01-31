import { useEffect } from "react";
import { usePropertyStore } from "../../../hooks/usePropertyStore";
import { Box, Title } from "../../../components/styled-components/utilities";
import GridProperties from "../../../components/grid/GridProperties";

const GetProperties = () => {
    const { startLoadingProperties } = usePropertyStore();

    useEffect(() => {
        startLoadingProperties({ typeProperties: "all" });
    }, []);

    return (
        <Box sx={{ marginTop: "30px", marginLeft: "30px" }}>
            <Title>Todas las propiedades</Title>
            <GridProperties />
        </Box>
    );
};

export default GetProperties;
