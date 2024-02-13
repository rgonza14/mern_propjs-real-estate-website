import "./gridProperties.styles.css";
import { usePropertyStore } from "../../hooks/usePropertyStore";
import { Paragraph } from "../styled-components/utilities";
import IconsResume from "./IconsResume";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useNavigate } from "react-router-dom";
import GridSkeleton from "./GridSkeleton";
import NotResults from "./NotResults";

const GridProperties = () => {
    const { properties, setActiveProperty, isLoading } = usePropertyStore();
    const { status } = useAuthStore();
    const navigate = useNavigate();

    const onClickProperty = item => {
        setActiveProperty(item);
        if (status === "authenticated") {
            navigate(`/admin/properties/${item._id}`);
        } else {
            navigate(`/properties/${item._id}`);
        }
    };

    if (isLoading) {
        return <GridSkeleton />;
    }

    if (properties.length === 0) {
        return <NotResults />;
    }

    return (
        <div className='properties-wrapper'>
            {properties.map((item, index) => (
                <div
                    className='property'
                    key={index}
                    onClick={() => onClickProperty(item)}
                >
                    <img
                        src={item.image}
                        alt='Foto de la propiedad'
                        className='property__image'
                        loading='lazy'
                    />
                    <div className='property__info'>
                        <Paragraph
                            color='var(--dark-blue)'
                            fontWeight='700'
                            fontSize='16px'
                        >
                            {item.price} USD
                        </Paragraph>
                        <Paragraph>{item.title}</Paragraph>
                        <IconsResume
                            cantCuartos={item.numRooms}
                            cantBanios={item.numBathrooms}
                            areaCubierta={item.coveredArea}
                        />
                    </div>
                    <span className='property__type-operation'>
                        {item.typeOperation}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default GridProperties;
