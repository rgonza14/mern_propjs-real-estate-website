import { createSlice } from "@reduxjs/toolkit";

export const agentSlice = createSlice({
    name: "agent",
    initialState: {
        agents: [],
        activeAgent: null,
        errors: undefined
    },
    reducers: {
        onSetActiveAgent: (state, action) => {
            state.activeAgent = action.payload;
        },
        onAddNewAgent: (state, action) => {
            state.agents.push(action.payload);
            state.errors = null;
        },
        onUpdateAgent: (state, action) => {
            state.agents = state.agents.map(agent => {
                if (agent._id === action.payload._id) {
                    return action.payload;
                }
                return agent;
            });
            state.errors = null;
        },
        onLoadAgents: (state, action) => {
            state.agents = action.payload;
        },
        onDeleteAgent: (state, action) => {
            state.agents = state.agents.filter(
                agent => agent._id !== action.payload._id
            );
        },
        onSetErrors: (state, action) => {
            state.errors = action.payload;
        }
    }
});

export const {
    onSetActiveAgent,
    onAddNewAgent,
    onDeleteAgent,
    onLoadAgents,
    onUpdateAgent,
    onSetErrors
} = agentSlice.actions;
