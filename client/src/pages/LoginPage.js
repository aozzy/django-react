import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SpinnerComponent from '../components/SpinnerComponent'
import Title from "../components/Title";
import { login, reset } from "../features/auth/authSlice";


export default function LoginPage() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user,isLoading,isError,IsSuccess,message} = useSelector(state => state.auth)
  
  useEffect(()=>{
    if (isError) {
      toast.error(message)
    }
   
    if (IsSuccess || user){
      navigate('/')
    }
    dispatch(reset())

  },[isError,IsSuccess,message,dispatch,navigate,user])
  const submitHandler = (e) => {
    e.preventDefault()
    if (!email){
      toast.error("Please provide a valid email address")
    }
    if (!password){
      toast.error("Please provide a valid password")
    }
    const userData = {
      email,
      password
    }
dispatch(login(userData))

  }
  return (
   <React.Fragment>
    
   </React.Fragment>
  )
}
