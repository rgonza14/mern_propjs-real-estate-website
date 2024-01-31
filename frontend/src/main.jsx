import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/AppRouter.jsx";
import GlobalStyle from "./styles/reset-styles.js";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <ToastContainer />
            <AppRouter />
            <GlobalStyle />
        </Provider>
    </React.StrictMode>
);
