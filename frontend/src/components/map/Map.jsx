import { getEnvVariables } from "../../helpers/getEnvVariables";
import "./map.styles.css";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];
const { VITE_GOOGLE_MAPS_API_KEY } = getEnvVariables();

const Map = ({ lat = 40, lng = 22 }) => {
    const center = { lat, lng };

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: `${VITE_GOOGLE_MAPS_API_KEY}`,
        libraries
    });

    if (!isLoaded) return <div>Cargando...</div>;

    return (
        <GoogleMap
            zoom={15}
            center={center}
            mapContainerClassName='map-container'
        >
            <MarkerF key={14} position={center} />
        </GoogleMap>
    );
};

export default Map;
