import React from 'react'

const Products = ({ products, handleDelete }) => {
  return <>
    <h2>Produits</h2>
    <table>
      <tbody>
        <tr>
        <td>Noms</td>
          <td>Prix</td>
          <td>Quantités</td>
        </tr>
    {products.map(product =>
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td> 
          <button onClick={()=>handleDelete(product.id)} className='delButton'>
          Surpprimer
          </button>
          </td>
      </tr>
    )}
    </tbody>
  </table>
  </>
}

export default Products