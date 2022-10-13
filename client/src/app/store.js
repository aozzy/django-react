import {configureStore} from '@reduxjs/toolkit'
import propertyReducer from "../features/properties/propertySlice"
import authReducer from "../features/auth/authSlice"
import profileReducer from "../features/profiles/profileSlice"

export  const store = configureStore({
reducer:{
  properties:propertyReducer,
  auth: authReducer,
  profile: profileReducer
},
})