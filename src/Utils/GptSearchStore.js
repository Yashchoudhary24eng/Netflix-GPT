import { createSlice } from "@reduxjs/toolkit";

const GptSearchStore = createSlice({

    name:"gptSearchStore",
    initialState:null,
    reducers:{

        addSearchData: (state,action)=>{
            return action.payload;
        },

    }
});

export const {addSearchData} = GptSearchStore.actions;
export default GptSearchStore.reducer;