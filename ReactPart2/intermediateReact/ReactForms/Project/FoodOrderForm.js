import React, { useState } from "react";

function FoodOrderForm() {

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [order,setOrder] = useState("");

  const handleName = ({target}) => {
    setName(target.value)
  }

  const handlePhone = ({target}) => {
    setPhone(target.value)
  }

  const handleAddress = ({target}) => {
      setAddress(target.value)
    }

  const handleOrder = ({target}) => {
      setOrder(target.value)
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      Order Successful!\nYour order was ${order}\nPlease show your confirmation number for pickup.
    `)
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" name="name" type="text" value={name} onChange={handleName} />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input id="phone" name="phone" type="tel" value={phone} onChange={handlePhone} />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input id="address" name="address" type="text" value={address} onChange={handleAddress} />
        </div>
        <div>
          <label htmlFor="order">Order: </label>
          <input id="order" name="order" type="text" value={order} onChange={handleOrder} />
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </>
  )
}

export default FoodOrderForm;