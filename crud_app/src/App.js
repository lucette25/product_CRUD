import React from 'react'
import { useState, useEffect } from 'react'

import Products from './components/Products'
import Form from './components/Form'
import Filter from './components/Filter'
import Notification from './components/Notification'
import UpdateForm from './components/UpdateForm'



import productService from './services/products'

const App = () => {
  const [products, setProducts] = useState([])
  const [newName, setNewName] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newQuantity, setNewQuantity] = useState('')

  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [toChange, setToChange] = useState([])
  const [show, setShow] = useState(false);

  useEffect(() => {
    productService.getAll().then(products=> {
      setProducts(products)
    })
  }, [])

  const notify = (message, type='info') => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  const addProduct = (event) => {
    event.preventDefault()
    const newProduct = {
      name: newName,
      price: newPrice,
      quantity: newQuantity
    }
    const existingProduct = products.find(p => p.name === newProduct.name)
    if ( existingProduct ) {
        window.alert(`${existingProduct.name} existe déjà dans le stock, clicquez sur modifier pour modifier`)
        return 
    }

    productService.create(newProduct).then(savedPerson => {
      setProducts(products.concat(savedPerson))
      notify(`${savedPerson.name} est ajouté`)
    })
  }

const update = (id) => {
  const existingProduct = products.find(p => p.id === id)

  const ok = window.confirm(`${existingProduct.name} existe déjà dans le stock, mettre à jour les informations?`)
  if (ok) {
  
  const existingProduct = products.find(p => p.id === id)
  setShow(true)
  setToChange([existingProduct.name,existingProduct.price,existingProduct.quantity])
  }
}
  
const updateProduct = (name) => {
  const existingProduct = products.find(p => p.name === name)
  productService.update(existingProduct.id, {...existingProduct, price: newPrice, quantity : newQuantity }).then(savedPerson => {
    setProducts(products.map(p => p.id === existingProduct.id ? savedPerson : p ))
    notify(` Informations de ${savedPerson.name} mises à jour`)
  }).catch(error => {
      notify(
          `${existingProduct.name} a déjà été supprimée `, 'alert'
        )
        setProducts(products.filter(p => p.id !== existingProduct.id))
    })
  setShow(false)
}

const productsToShow = (filter.length === 0) ? products :
  products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

const deleteProduct = (id) => { 
  const toDelete = products.find(p => p.id === id)
  const ok = window.confirm(` Voulez vous vraiment supprimer ${toDelete.name} ?`)
  if (ok) {
    productService.remove(id).then(() => {
      setProducts(productsToShow.filter(p => p.id !== id))
      notify(`${toDelete.name} est supprimé`)
    })  
  }
}
  

  return (
    <div>
      <Notification notification={notification} />
      <UpdateForm show={show}
        setShow={setShow} 
        name={toChange[0]}
        price={toChange[1]}
        quantity={toChange[2]}
        update={updateProduct}
        handlePriceChange={({ target }) => setNewPrice(target.value)}
        handleQuantityChange={({ target }) => setNewQuantity(target.value)}

          />

      <h1 className='text-success text-center' >Stock de Produits</h1>
      <Form 
        name={newName}
        price={newPrice}
        quantity={newQuantity}
        handleNameChange={({ target }) => setNewName(target.value)}
        handlePriceChange={({ target }) => setNewPrice(target.value)}
        handleQuantityChange={({ target }) => setNewQuantity(target.value)}
        addProduct={addProduct}
      />

      <Filter
        value={filter}
        handleChange={({ target }) => setFilter(target.value)}
      />

      <Products
        products={productsToShow}
        handleDelete={deleteProduct}
        handleUpdate={update}

      />
      
    </div>
  )

}

export default App