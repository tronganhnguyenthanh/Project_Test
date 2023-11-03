import {createSlice} from "@reduxjs/toolkit";
const postSlice = createSlice({
  name:"post",
  initialState:{
   toggle:false
  },
  reducers:{
   togglePost:(state) => {
    state.toggle = !state.toggle   
   }
  }
})
export const {togglePost} = postSlice.actions
const postReducer = postSlice.reducer
export default postReducer