import { Title } from "../../../components/styled-components/utilities";
import { usePropertyStore } from "../../../hooks/usePropertyStore";
import { useEffect } from "react";
import GridProperties from "../../../components/grid/GridProperties";

const LatestProperties = () => {
    const { startLoadingNLastProperties } = usePropertyStore();

    useEffect(() => {
        startLoadingNLastProperties(4);
    }, []);

    return (
        <div>
            <Title>Últimas propiedades</Title>
            <GridProperties />
        </div>
    );
};

export default LatestProperties;
