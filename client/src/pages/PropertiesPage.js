import React, {useEffect} from 'react'
import {Container,Col,Row} from "react-bootstrap"
import {useSelector,useDispatch} from 'react-redux'
import SpinnerComponent from '../components/SpinnerComponent'
import { getProperties } from '../features/properties/propertySlice'
import {toast} from "react-toastify"
import Property from '../components/Property'
import Title from "../components/Title";
export default function PropertiesPage() {
  const {properties,isLoading,isSuccess,isError,message} = useSelector((state)=> state.properties)
  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(getProperties())
  if (isError){
    toast.error(message)
  }
  },[dispatch,isError,message])
  return (
    <React.Fragment>
      <Title title="Properties catalog" />
      <Container>
      {isLoading && <SpinnerComponent/>}
        <Row>
          <Col className='mg-top text-center'>
           <h1>Properties</h1>
           <hr className='hr-text'/>
          </Col>
        </Row>
        {<>
        <Row className='mt-3'>
          {properties.map((item) =>(
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <Property property={item}/>
            </Col>
          ))}

        </Row>
        </>}
      </Container>
    </React.Fragment>
  )
}
