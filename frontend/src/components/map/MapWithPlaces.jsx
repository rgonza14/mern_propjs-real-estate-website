import "./map.styles.css";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import Places from "./Places";
import Loader from "../loader/Loader";
import { getEnvVariables } from "../../helpers/getEnvVariables";

const { VITE_GOOGLE_MAPS_API_KEY } = getEnvVariables();
const libraries = ["places"];

//"AIzaSyAQo7yvraTJZYK1HGVa-lcRcewl3hPBzHY"
const MapWithPlaces = ({ setUbication, defaultPosition }) => {
    const [selected, setSelected] = useState({ lat: 40, lng: 20 });
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: `${VITE_GOOGLE_MAPS_API_KEY}`,
        libraries
    });

    useEffect(() => {
        if (defaultPosition) {
            setSelected({ lat: defaultPosition.lat, lng: defaultPosition.lng });
        }
    }, [defaultPosition]);

    if (!isLoaded)
        return (
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Loader />
            </div>
        );

    const handlePositionChanged = data => {
        setSelected(data.coords);
        setUbication(data);
    };

    return (
        <>
            <div className='map-searchbar'>
                <Places
                    setSelected={handlePositionChanged}
                    defaultText={defaultPosition?.text}
                />
            </div>
            <GoogleMap
                zoom={15}
                center={selected}
                mapContainerClassName='map-with-places-container'
            >
                {selected && <MarkerF key={14} position={selected} />}
            </GoogleMap>
        </>
    );
};

export default MapWithPlaces;
