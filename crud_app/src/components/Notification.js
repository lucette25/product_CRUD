import React from 'react'
import { ToastContainer ,Toast } from 'react-bootstrap';


const Notification = ({ notification }) => {
  if (notification === null) {
    return null
  }

  return (
    <div classename="container">
      <ToastContainer position="top-end" className="p-3">
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Modification</strong>   
        </Toast.Header>
        <Toast.Body>{notification.message}</Toast.Body>
      </Toast>
      </ToastContainer>
    </div>
    
  )
}
  
  export default Notification