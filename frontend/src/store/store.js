import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { propertySlice } from "./slices/propertySlice";
import { agentSlice } from "./slices/agentSlice";
import { AdminSlice } from "./slices/adminSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        properties: propertySlice.reducer,
        agents: agentSlice.reducer,
        admins: AdminSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});
