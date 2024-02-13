import "./propertyDetail.css";
import defaultProfile from "./../../../assets/images/default.png";
import { LiaUser, LiaWhatsapp } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";
import {
    Paragraph,
    Subtitle,
    Title
} from "../../../components/styled-components/utilities";
import { usePropertyStore } from "../../../hooks/usePropertyStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import IconsDetail from "./IconsDetail";
import FormContact from "../../../components/form/contact/FormContact";
import Map from "../../../components/map/Map";
import NotFound from "../../../components/not-found/NotFound";
import { useAgentStore } from "../../../hooks/useAgentStore";

const PropertyDetail = () => {
    const {
        startLoadingPropertyById,
        setActiveProperty,
        activeProperty,
        hasPropertySelected
    } = usePropertyStore();
    const { idProperty } = useParams();
    const {
        title,
        description,
        price,
        image,
        numBathrooms,
        numRooms,
        coveredArea,
        ubication,
        numFloors,
        numAmbientes,
        typeProperty,
        typeOperation,
        lat,
        lng,
        agent
    } = activeProperty || {};

    const { startLoadingAgentById, activeAgent, setActiveAgent } =
        useAgentStore();

    useEffect(() => {
        startLoadingPropertyById(idProperty);
        window.scrollTo(0, 0);
        return () => {
            setActiveProperty(null);
        };
    }, []);

    useEffect(() => {
        if (hasPropertySelected) {
            startLoadingAgentById(agent);
        }
        return () => {
            setActiveAgent(null);
        };
    }, [agent]);

    return !activeProperty && !activeAgent ? (
        <NotFound />
    ) : (
        <div className='prop-detail__wrapper'>
            <div className='prop-detail__head'>
                <Title textAlign='left'>
                    {title}. En {typeOperation}
                </Title>
            </div>

            <div
                className='prop-detail__image'
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            <div className='prop-detail__container'>
                <div className='prop-detail__col'>
                    <div className='prop-detail__card'>
                        <div className='prop-detail__description'>
                            <Subtitle>Descripción</Subtitle>

                            <Paragraph
                                color='#000'
                                fontWeight='700'
                                fontSize='19px'
                                mb='16px'
                            >
                                {price} USD
                            </Paragraph>

                            <Paragraph>{description}</Paragraph>
                        </div>

                        <IconsDetail
                            data={{
                                numRooms,
                                numBathrooms,
                                coveredArea,
                                numFloors,
                                numAmbientes,
                                typeProperty
                            }}
                        />
                    </div>

                    <div className='prop-detail__card'>
                        <Subtitle>Ubicación</Subtitle>
                        <Paragraph mb='10px'>{ubication}</Paragraph>
                        <Map lat={lat} lng={lng} />
                    </div>
                </div>

                <div className='prop-detail__col'>
                    <div className='prop-detail__card'>
                        <Subtitle>Agente a cargo</Subtitle>

                        <div className='prop-detail__agent'>
                            <img
                                src={activeAgent?.image || defaultProfile}
                                alt='agente'
                                className='prop-detail__agent-picture'
                                loading='lazy'
                            />

                            <div>
                                <div className='prop-detail__agent-contact'>
                                    <LiaUser />
                                    <p>{activeAgent?.full_name}</p>
                                </div>

                                <div className='prop-detail__agent-contact'>
                                    <TfiEmail />
                                    <p>{activeAgent?.email}</p>
                                </div>
                                <div className='prop-detail__agent-contact'>
                                    <LiaWhatsapp />
                                    <p>{activeAgent?.cellphone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='prop-detail__card'>
                        <Subtitle>Contacto</Subtitle>
                        <FormContact />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetail;
