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

  return (
    <div>
      <div className='main'>
        <div className="column1"></div>
        <div className="column2" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          <br />
          <br />
          <div style={{ textAlign: 'center', gridColumn: '1' }}>
            <h1>Books</h1>
          </div>
          <br />
          {ProductData.map(product => (
            <div key={product.id} style={{ marginBottom: '40px' }}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                {product.images.map((image, index) => (
                  <React.Fragment key={index}>
                    <img src={image} alt={`${product.name} ${index + 1}`} className="product-img" />
                    <br />
                    <br />
                  </React.Fragment>
                ))}
              </div>
              <h4>Purchase Link</h4>
              <div style={{ border: '1px solid #ccc', padding: '10px' }}>
                <strong>{product.type}</strong>: {product.price} AUD
                <br />
                ISBN: {product.isbn}
                <br />
                Publisher: {product.publisher}
                <br />
                Language: {product.language}
                <br />
                Trim Size: {product.trim}
                <br />
                Page Count: {product.pageCount}
                <br />
                Publication Date: {product.publicationDate}
                <br />
                Audience: {product.audience}
                <br />
                Genre: {product.genre}
                <br />
                <AddCartButton
                  item={product} // Pass the product item itself
                  format={product} // Pass the entire product as format
                  onAddToCart={addToCart}
                />
              </div>
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
