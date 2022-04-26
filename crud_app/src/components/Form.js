import React from 'react'
const Form = ({ addProduct, name, price,quantity, handleNameChange, handlePriceChange,handleQuantityChange}) => <>

  <form onSubmit={addProduct} >
  <table>
      <tbody>
      <tr>
      <td>Nom : </td>
      <td> <input
        onChange={handleNameChange}
      /> 
      </td>
    </tr>
    <tr>
    <td>Prix: </td>
    <td><input
        onChange={handlePriceChange}
      /> 
      </td>
    </tr>
    <tr>
    <td>Quantité:</td>
    <td> <input
        onChange={handleQuantityChange}
      /> </td>
    </tr>
    <tr>
    <td>
      <button type="submit" className='button'>Ajouter</button>
    </td>
    </tr>    
      </tbody>
  </table>
  </form>
  
</>

export default Form