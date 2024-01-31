import "./admin.styles.css";
import { IoMdAdd } from "react-icons/io";
import { Subtitle, Title } from "../../components/styled-components/utilities";
import { useEffect } from "react";
import { usePropertyStore } from "../../hooks/usePropertyStore";
import GridProperties from "../../components/grid/GridProperties";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

const AdminScreen = () => {
    const { startLoadingNLastProperties } = usePropertyStore();
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate("/admin/properties");
    };

    const handleClickNewProperty = () => {
        navigate("/admin/form-property");
    };

    useEffect(() => {
        startLoadingNLastProperties(4);
    }, []);

    return (
        <section className='prop-manager'>
            <Title>Propiedades</Title>

            <Button
                outline
                icon={<IoMdAdd size={18} />}
                action={handleClickNewProperty}
            >
                Nueva propiedad
            </Button>

            <div>
                <Subtitle>Agregados recientemente</Subtitle>

                <div style={{ position: "relative", height: "30px" }}>
                    <Button
                        reverse
                        action={handleClickButton}
                        icon={<IoArrowForwardCircleOutline size={18} />}
                        buttonClassName='button__view-all'
                    >
                        Ver todo
                    </Button>
                </div>

                <GridProperties />
            </div>
        </section>
    );
};

export default AdminScreen;
