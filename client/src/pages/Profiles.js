import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getProfile } from '../features/profiles/profileSlice'
export default function Profiles() {
  const {profile} = useSelector((state)=> state.profile)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProfile())
  console.log(profile);
  },[])
  return (
    <div>Profiles</div>
  )
}
