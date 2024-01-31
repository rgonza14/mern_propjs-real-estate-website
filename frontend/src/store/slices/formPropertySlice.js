import { createSlice } from "@reduxjs/toolkit";

export const formPropertySlice = createSlice({
    name: "formProperty",
    initialState: {
        ubication: "",
        price: 0
    },
    reducers: {
        onSetUbication: (state, action) => {
            state.ubication = action.payload;
        },
        onSetPrice: (state, action) => {
            state.price = action.payload;
        },
        onSetForm: (state, action) => {
            console.log("action", action);
            state = {
                ...state,
                [action.payload.name]: action.payload.value
            };
        }
    }
});

export const { onSetUbication, onSetPrice, onSetForm } =
    formPropertySlice.actions;
