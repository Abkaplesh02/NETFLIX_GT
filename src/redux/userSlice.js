import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeItem:(state,action)=>{
            return null;
        }
    }
})

export const{addUser,removeItem}=userSlice.actions;
export default userSlice.reducer;