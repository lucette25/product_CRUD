import React from 'react'
import { useState, useEffect } from 'react'

import Products from './components/Products'
import Form from './components/Form'
import Filter from './components/Filter'
import Notification from './components/Notification'


import productService from './services/products'

const App = () => {
  const [products, setProducts] = useState([])
  const [newName, setNewName] = useState('')
  const [newPrice, setNewPrice] = useState('')
  const [newQuantity, setNewQuantity] = useState('')

  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    productService.getAll().then(products => {
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
      const ok = window.confirm(`${existingProduct.name} existe déjà dans le stock, mettre à jour les informations?`)
      if ( ok ) {

        productService.update(existingProduct.id, {...existingProduct, price: newPrice, quantity : newQuantity }).then(savedPerson => {
          setProducts(products.map(p => p.id === existingProduct.id ? savedPerson : p ))
          notify(` Informations de ${savedPerson.name} mises à jour`)
        })
        .catch(error => {
         notify(
            `${existingProduct.name} a déjà été supprimée `, 'alert'
          )
          setProducts(products.filter(p => p.id !== existingProduct.id))
        })

        return 
      }
    }

    productService.create(newProduct).then(savedPerson => {
      setProducts(products.concat(savedPerson))
      notify(`${savedPerson.name} est ajouté`)
    })
  }


  const productsToShow = (filter.length === 0) ? products :
    products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))

    const deleteProduct = (id) => { 
      const toDelete = products.find(p => p.id === id)
      const ok = window.confirm(` Voulez vous vraiment supprimer ${toDelete.name} ?`)
      if (ok) {
        productService.remove(id).then(() => {
          setProducts(products.filter(p => p.id !== id))
          notify(`${toDelete.name} est supprimé`)
        })  
      }
    }

  return (
    <div>
      <Notification notification={notification} />

      <h1>Stock de Produits</h1>
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
      />
      
    </div>
  )

}

export default App