import React from 'react'
import {Modal,Form, Button} from 'react-bootstrap';


const UpdateForm = ({ show, setShow,name,update,handlePriceChange,handleQuantityChange}) => {
   
    
   
    return (
        <div className='container'>
        <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title>Mises à jour</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3"  >
    <Form.Label> Nom </Form.Label>
    <Form.Control type="text" value={name} disabled />
    </Form.Group>
    <Form.Group className="mb-3" onChange={handlePriceChange} >
    <Form.Label> Prix </Form.Label>
    <Form.Control type="text"  />
    </Form.Group>
    <Form.Group className="mb-3" onChange={handleQuantityChange} >
    <Form.Label> Quantité </Form.Label>
    <Form.Control type="text"  />
    </Form.Group>
    <Button variant="primary" onClick={()=>update(name)}>
            Enrégistrer
    </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() =>setShow(false)}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </div>
       
      )
  
    
  }
  
  export default UpdateForm