import { Outlet } from "react-router-dom";
import NavbarDashboard from "../components/header/NavbarDashboard";
import { Box } from "../components/styled-components/utilities";

const LayoutDashboard = () => {
    return (
        <Box sx={{ marginLeft: "350px" }}>
            <NavbarDashboard />

            <Box sx={{ margin: "0 auto", width: "95%", marginTop: "30px" }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default LayoutDashboard;
