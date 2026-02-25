import { createSlice } from "@reduxjs/toolkit";


const LanguageSlice = createSlice({

    name: "lan",
    initialState:{
        language: "en"
    },
    reducers:{
        languageUpdate: (state,action)=>{
            state.language = action.payload;
        },
    }
});

export const {languageUpdate} = LanguageSlice.actions;
export default LanguageSlice.reducer;