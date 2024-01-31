import "./gridProperties.styles.css";
import { MdOutlineLineStyle } from "react-icons/md";
import { Paragraph } from "../styled-components/utilities";

const IconsResume = ({ cantCuartos, cantBanios, areaCubierta }) => {
    return (
        <div className='icons-wrapper'>
            <div className='icons-resume'>
                <Paragraph className='icons-resume__description'>
                    Cuartos
                </Paragraph>

                <Paragraph className='icons-resume__quantity'>
                    {cantCuartos}
                </Paragraph>
                <MdOutlineLineStyle
                    className='icons-resume__icon'
                    color='var(--light-blue)'
                    size={25}
                />
            </div>
            <div className='icons-resume'>
                <Paragraph className='icons-resume__description'>
                    Baños
                </Paragraph>
                <Paragraph className='icons-resume__quantity'>
                    {cantBanios}
                </Paragraph>
                <MdOutlineLineStyle
                    className='icons-resume__icon'
                    color='var(--light-blue)'
                    size={25}
                />
            </div>
            <div className='icons-resume'>
                <Paragraph className='icons-resume__description'>
                    Área total
                </Paragraph>
                <Paragraph className='icons-resume__quantity'>
                    {areaCubierta}
                </Paragraph>
                <MdOutlineLineStyle
                    className='icons-resume__icon'
                    color='var(--light-blue)'
                    size={25}
                />
            </div>
        </div>
    );
};

export default IconsResume;
