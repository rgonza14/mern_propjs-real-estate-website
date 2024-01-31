import "./bannerSteps.styles.css";
import {
    AiOutlineSearch,
    AiOutlineMessage,
    AiOutlineKey
} from "react-icons/ai";

const BannerSteps = () => {
    return (
        <div className='banner-steps'>
            <div className='banner-steps__item'>
                <AiOutlineSearch size={64} color='#122947' />
                <h2 className='banner-steps__title'>Escoge una propiedad</h2>
                <p className='banner-steps__paragraph'>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet
                </p>
            </div>
            <div className='banner-steps__item'>
                <AiOutlineMessage size={64} color='#122947' />
                <h2 className='banner-steps__title'>Contactate con nostros</h2>
                <p className='banner-steps__paragraph'>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet
                </p>
            </div>
            <div className='banner-steps__item'>
                <AiOutlineKey size={64} color='#122947' />
                <h2 className='banner-steps__title'>
                    Disfruta la casa de tus sueños
                </h2>
                <p className='banner-steps__paragraph'>
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet
                </p>
            </div>
        </div>
    );
};

export default BannerSteps;
