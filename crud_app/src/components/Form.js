import React from 'react'
import { Form,Button } from 'react-bootstrap';


const Formulaire = ({ addProduct, name, price,quantity, handleNameChange, handlePriceChange,handleQuantityChange}) =>{

  return (
  <div className='container'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleNameChange}>
          <Form.Label>Nom </Form.Label>
          <Form.Control type="text" placeholder="Entrez le nom du produit" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handlePriceChange}>
          <Form.Label> Prix unitaire </Form.Label>
          <Form.Control type="text" placeholder="Entrez le prix du produit" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleQuantityChange}>
          <Form.Label> Quantité </Form.Label>
          <Form.Control type="text" placeholder="Entrez la quantité du produit" />
      </Form.Group>

      <Button variant="success" type="submit" onClick={addProduct}>
        Ajouter
      </Button>
    </Form>
  </div>
  )
}



export default Formulaire