import { createSlice } from "@reduxjs/toolkit";


const GptToggleSlice = createSlice({

    name:"GptToggle",
    initialState:{
        gptinitialvalue:false,
    },
    reducers:{
        gpttoggle: (state)=>{
            state.gptinitialvalue = !state.gptinitialvalue;
        },
    },

});

export default GptToggleSlice.reducer;
export const{gpttoggle} = GptToggleSlice.actions