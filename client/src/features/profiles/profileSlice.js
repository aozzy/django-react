import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileService from "./profileService";
const initialState = {
  profile:{},
  isError:false,
  isLoading:false,
  isSuccess:false,
  message:''
}