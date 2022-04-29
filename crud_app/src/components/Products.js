import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button} from 'react-bootstrap';


const Products = ({ products,handleDelete,handleUpdate }) => {

  return (
  <div className='container'>
    <Table striped bordered hover>
      <thead>
      <tr>
        <th> Noms</th>
        <th>Prix unitaire</th>
        <th>Quantités</th>
        <th>Actions</th>

      </tr>
      </thead>
      <tbody>
        {products.map(product =>
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td> 
          
        <Button variant="primary" type="submit" onClick={()=>handleUpdate(product.id)}>
        Modifier
        </Button>
        <Button variant="danger" type="submit" onClick={()=>handleDelete(product.id)}>
        Supprimer
        </Button>
              </td>
          </tr>
        )}

      </tbody>
    </Table>
  </div>
  )
      
    
  
}

export default Products