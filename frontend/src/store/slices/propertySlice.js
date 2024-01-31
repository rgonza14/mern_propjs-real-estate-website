import { createSlice } from "@reduxjs/toolkit";

export const propertySlice = createSlice({
    name: "properties",
    initialState: {
        properties: [],
        activeProperty: null,
        isLoading: true,
        errors: undefined
    },
    reducers: {
        onAddNewProperty: (state, action) => {
            state.properties.push(action.payload);
            state.errors = null;
        },
        onLoadProperties: (state, action) => {
            state.properties = action.payload;
            state.isLoading = false;
            state.errors = undefined;
        },
        onSetActiveProperty: (state, action) => {
            state.activeProperty = action.payload;
        },
        onUpdateProperty: (state, action) => {
            state.errors = null;
            state.properties = state.properties.map(property => {
                if (property._id === action.payload._id) {
                    return action.payload;
                }
                return property;
            });
        },
        onDeleteProperty: (state, action) => {
            state.properties = state.properties.filter(
                property => property._id !== action.payload._id
            );
        },
        onSetLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        onSetErrors: (state, action) => {
            state.errors = { msg: action.payload };
        },
        onSetImageToActiveProperty: (state, action) => {
            state.activeProperty.imagen = action.payload;
        }
    }
});

export const {
    onAddNewProperty,
    onLoadProperties,
    onSetActiveProperty,
    onUpdateProperty,
    onSetLoading,
    onDeleteProperty,
    onSetErrors,
    onSetImageToActiveProperty
} = propertySlice.actions;
