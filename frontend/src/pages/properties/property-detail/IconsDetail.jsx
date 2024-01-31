import { Paragraph } from "../../../components/styled-components/utilities";
import "./propertyDetail.css";
import {
    PiBathtub,
    PiBed,
    PiCornersOut,
    PiStack,
    PiSquaresFour,
    PiBuildings
} from "react-icons/pi";

const IconsDetail = ({ data }) => {
    return (
        <>
            <div className='icons-detail'>
                <div className='icons-detail__info'>
                    <PiBathtub className='prop-detail__icon' />

                    <Paragraph>Baños</Paragraph>
                    <Paragraph>{data.numBathrooms}</Paragraph>
                </div>
                <div className='icons-detail__info'>
                    <PiBed className='prop-detail__icon' />

                    <Paragraph>Cuartos</Paragraph>
                    <Paragraph>{data.numRooms}</Paragraph>
                </div>
                <div className='icons-detail__info'>
                    <PiCornersOut />
                    <Paragraph>Área cubierta</Paragraph>
                    <Paragraph>{data.coveredArea}</Paragraph>
                </div>
                <div className='icons-detail__info'>
                    <PiStack />
                    <Paragraph>Pisos</Paragraph>
                    <Paragraph>{data.numFloors}</Paragraph>
                </div>
                <div className='icons-detail__info'>
                    <PiSquaresFour />
                    <Paragraph>Ambientes</Paragraph>
                    <Paragraph>{data.numAmbientes}</Paragraph>
                </div>
                <div className='icons-detail__info'>
                    <PiBuildings />
                    <Paragraph>Tipo propiedad</Paragraph>
                    <Paragraph>{data.typeProperty}</Paragraph>
                </div>
            </div>
        </>
    );
};

export default IconsDetail;
