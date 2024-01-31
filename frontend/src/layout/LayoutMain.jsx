import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Section } from "../components/styled-components/utilities";

const LayoutMain = () => {
    return (
        <div className='wrapper-main'>
            <Header />
            <Outlet />
            <Section></Section> {/* para aplicar el margin-top */}
            <Footer />
        </div>
    );
};

export default LayoutMain;
