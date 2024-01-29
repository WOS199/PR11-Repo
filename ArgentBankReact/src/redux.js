import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userConnexion",
    initialState : [],
    reducers: {
        signIn: (state, action) => {
            // {type: 'SIGN_IN', payload: token}
            const newUserConnexion = {
                token: action.payload
            }
            state.push(newUserConnexion);
        },
        signOut: () => {}
    }
})