import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileService from "./profileService";
const initialState = {
  profile:{},
  isError:false,
  isLoading:false,
  isSuccess:false,
  message:''
}


export const getProfile = createAsyncThunk("profile/getProfile", async(_,thunkAPI)=>{
  try {
    return await profileService.getProfile()
  } catch (error) {
    const message = (
      error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      console.log(error.response) 
      return thunkAPI.rejectWithValue(message)
  }
})


export const profileSlice = createSlice({

  name: 'profile',
  initialState,
  reducers:{
    reset: (state) => initialState
  },
  extraReducers: (builder)=>{
    builder
    .addCase(getProfile.pending, (state)=>{
      state.isLoading = true
    })
    .addCase(getProfile.fulfilled,(state,action)=> {
      state.isLoading = false
      state.isSuccess = true
      state.profile = action.payload.profile
    })
    .addCase(getProfile.rejected,(state,action)=> {
      state.isLoading = false
      state.isError= true
      state.message = action.payload
    })
  }
})

export const {reset} = profileSlice.actions
export default profileSlice.reducer