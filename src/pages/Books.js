// src/pages/Books.js

import React, { useState } from 'react';
import AddCartButton from '../components/AddCartButton';
import ProductData from '../data/ProductData';

const Books = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const updatedCart = [...prevCart, item];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart; // Return the updated state
    });
  };

  // Find the item based on its ID
  const findItemById = (itemId) => {
    return ProductData.find(item => item.id === itemId);
  };

  return (
    <div>
      <div className='main'>
        <div className="column1"></div>
        <div className="column2">
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <h1>Books</h1>
          </div>
          <br />
          {ProductData.map(item => (
            <div key={item.id} style={{ marginBottom: '40px' }}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div style={{ textAlign: 'center' }}>
                {item.images.map((image, index) => (
                  <React.Fragment key={index}>
                    <img src={image} alt={`${item.name} ${index + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
                    <br />
                    <br />
                  </React.Fragment>
                ))}
              </div>
              <h4>Purchase Links</h4>
              <p>
                Paid version available here
                <AddCartButton
                  item={findItemById(item.id)} // Pass the correct item based on ID
                  onAddToCart={addToCart}
                />
              </p>
              <h4>Product details</h4>
              <ul>
                <li>OS:
                  <ul>
                    {item.ProductDetails.os.map(os => (
                      <li key={os}>{os}</li>
                    ))}
                  </ul>
                </li>
                <li>Processor: {item.ProductDetails.processor}</li>
                <li>RAM: {item.ProductDetails.ram}</li>
                <li>Graphics: {item.ProductDetails.graphics}</li>
                <li>Storage: {item.ProductDetails.storage}</li>
              </ul>
              <br />
              <br />
            </div>
          ))}
        </div>
        <div className="column3">
          {/* Example: Display cart count */}
          <p>Cart Count: {cart.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Books;
