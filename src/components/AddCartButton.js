// src/components/AddCartButton.js

import React, { useState } from 'react';

const AddCartButton = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCartHandler = () => {
    const itemToAdd = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      format: item.type // Assuming 'type' serves as the format identifier
    };

    // Retrieve existing cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the item is already in the cart
    const existingItemIndex = storedCart.findIndex(cartItem => cartItem.id === itemToAdd.id && cartItem.format === itemToAdd.format);

    if (existingItemIndex !== -1) {
      // Item already exists in cart, update quantity
      storedCart[existingItemIndex].quantity += 1;
    } else {
      // Item does not exist in cart, add new item
      storedCart.push(itemToAdd);
    }

    // Update localStorage with the updated cart
    localStorage.setItem('cart', JSON.stringify(storedCart));

    // Set addedToCart state to true to display confirmation message
    setAddedToCart(true);

    // Reset addedToCart state after 2 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  return (
    <div>
      <button onClick={addToCartHandler}>Add to Cart</button>
      {addedToCart && <p style={{ color: 'green', marginTop: '5px' }}>Added to Cart!</p>}
    </div>
  );
};

export default AddCartButton;
