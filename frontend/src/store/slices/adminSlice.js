import { createSlice } from "@reduxjs/toolkit";

export const AdminSlice = createSlice({
    name: "admin",
    initialState: {
        admins: [],
        activeAdmin: null,
        errors: undefined
    },
    reducers: {
        onSetActiveAdmin: (state, action) => {
            state.activeAdmin = action.payload;
        },
        onAddNewAdmin: (state, action) => {
            state.admins.push(action.payload);
            state.errors = null;
        },
        onUpdateAdmin: (state, action) => {
            state.admins = state.admins.map(admin => {
                if (admin._id === action.payload._id) {
                    return action.payload;
                }
                return admin;
            });
            state.errors = null;
        },
        onLoadAdmins: (state, action) => {
            state.admins = action.payload;
        },
        onDeleteAdmin: (state, action) => {
            state.admins = state.admins.filter(
                admin => admin._id !== action.payload._id
            );
        },
        onSetErrors: (state, action) => {
            state.errors = action.payload;
        }
    }
});

export const {
    onSetActiveAdmin,
    onAddNewAdmin,
    onUpdateAdmin,
    onLoadAdmins,
    onDeleteAdmin,
    onSetErrors
} = AdminSlice.actions;
