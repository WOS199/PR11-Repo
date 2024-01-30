import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userConnexion",
    initialState: {
        token: '',
        profile: {},
    },
    reducers: {
        addToken: (state, action) => {
            state.token = action.payload.token;
        },
        addProfile: (state, action) => {
            state.profile = action.payload.profile;
        },
        signOut: (state) => {
            state.token = '';
            state.profile = {};
        },
        updateUserName: (state, action) => {
            state.profile.userName = action.payload.userName;
        }
    }
});

export const { reducer } = userSlice;

export const store = configureStore({
    reducer: {
        userConnexion: reducer
    }
});