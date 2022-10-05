import React, {useEffect} from 'react'
import {Container,Col,Row} from "react-bootstrap"
import {useSelector,useDispatch} from 'react-redux'
import SpinnerComponent from '../components/SpinnerComponent'
import { getProperties,reset } from '../features/properties/propertySlice'

export default function PropertiesPage() {
  const {properties,isLoading,isSuccess} = useSelector((state)=> state.properties)
  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(getProperties())
  },[dispatch])
  return (
    <React.Fragment>
      <Container>
      {isLoading && <SpinnerComponent/>}
        <Row>
          <Col className='mg-top'>
           <h1>Properties will be displayed here</h1>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}
