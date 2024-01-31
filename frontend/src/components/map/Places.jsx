import usePlacesAutocomplete, {
    getGeocode,
    getLatLng
} from "use-places-autocomplete";
import { SearchBar, SearchBarOption } from "../search-bar/SearchBar";
import { useEffect } from "react";

const Places = ({ setSelected, defaultText = "" }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions
    } = usePlacesAutocomplete();

    useEffect(() => {
        setValue(defaultText, false);
    }, [defaultText]);

    const handleInput = e => {
        setValue(e.target.value);
    };

    const handleSelect = suggestion => async () => {
        setValue(suggestion.description, false);
        clearSuggestions();
        const results = await getGeocode({ address: suggestion.description });
        const { lat, lng } = getLatLng(results[0]);
        setSelected({ coords: { lat, lng }, text: suggestion.description });
    };

    return (
        <SearchBar
            onChange={handleInput}
            value={value}
            placeholder='Buscar ubicación...'
        >
            {status === "OK" &&
                data.map(suggestion => (
                    <SearchBarOption
                        key={suggestion.place_id}
                        onClick={handleSelect(suggestion)}
                    >
                        {suggestion.structured_formatting.main_text}{" "}
                        {suggestion.structured_formatting.secondary_text}
                    </SearchBarOption>
                ))}
        </SearchBar>
    );
};

export default Places;
