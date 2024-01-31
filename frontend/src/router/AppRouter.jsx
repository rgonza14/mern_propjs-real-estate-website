import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../pages/home/HomeScreen";
import PropertiesScreen from "../pages/properties/PropertiesScreen";
import AdminScreen from "../pages/admin/AdminScreen";
import LayoutMain from "../layout/LayoutMain";
import LayoutDashboard from "../layout/LayoutDashboard";
import GetProperties from "../pages/admin/get-properties/GetProperties";
import ContactScreen from "../pages/contact/ContactScreen";
import PropertyDetail from "../pages/properties/property-detail/PropertyDetail";
import AgentManager from "../pages/admin/agent-manager/AgentManager";
import LoginScreen from "../pages/login/LoginScreen";
import { useAuthStore } from "../hooks/useAuthStore";
import FormProperty from "../components/form/FormProperty";
import NotFound from "../components/not-found/NotFound";
import AdminManager from "../pages/admin/admin-manager/AdminManager";

const AppRouter = () => {
    const { status } = useAuthStore();

    return (
        <BrowserRouter>
            <Routes>
                {status === "authenticated" ? (
                    <>
                        <Route path='/admin' element={<LayoutDashboard />}>
                            <Route path='/admin' element={<AdminScreen />} />

                            <Route
                                path='/admin/properties'
                                element={<GetProperties />}
                            />
                            <Route
                                path='/admin/properties/:idProperty'
                                element={<FormProperty />}
                            />
                            <Route
                                path='/admin/agent-manager'
                                element={<AgentManager />}
                            />
                            <Route
                                path='/admin/admin-manager'
                                element={<AdminManager />}
                            />
                            <Route
                                path='/admin/form-property'
                                element={<FormProperty />}
                            />
                            <Route path='/admin/*' element={<NotFound />} />
                        </Route>
                    </>
                ) : (
                    <>
                        <Route path='/admin/*' element={<LoginScreen />} />
                        <Route path='/' element={<LayoutMain />}>
                            <Route path='/' element={<HomeScreen />} />
                            <Route
                                path='properties'
                                element={<PropertiesScreen />}
                            />
                            <Route
                                path='properties/:idProperty'
                                element={<PropertyDetail />}
                            />

                            <Route path='contact' element={<ContactScreen />} />

                            <Route path='/*' element={<NotFound />} />
                        </Route>
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
