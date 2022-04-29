import React from 'react'
import { Form } from 'react-bootstrap';


const Filter = ({ value, handleChange }) => {
  return <div className='container'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" value={value} onChange={handleChange}>
      <Form.Label> Rechercher </Form.Label>
      <Form.Control type="text" placeholder="Filtre" />
      </Form.Group>
    </Form>
   
    </div>
  
}

export default Filter