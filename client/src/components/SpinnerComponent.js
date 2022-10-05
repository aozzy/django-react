import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function SpinnerComponent() {
  return (
    <div className='spinner-container'>
      <Spinner animation="grow" variant="primary" />
    </div>
  )
}
