import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const [country, setCountry] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/ProductData.csv')
      .then(response => response.text())
      .then(data => {
        const parsedData = Papa.parse(data, { header: true, dynamicTyping: true }).data;
        parsedData.forEach(product => {
          // Ensure images field is defined and not empty before splitting
          if (product.images) {
            product.images = product.images.split('|').map(image => image.trim());
          } else {
            product.images = []; // Set to empty array if images field is undefined or empty
          }
        });
        setProducts(parsedData);
      });
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (itemId, quantityToRemove) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity - quantityToRemove
        };
      }
      return item;
    }).filter(item => item.quantity > 0);

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handlePostcodeChange = (event) => {
    setPostcode(event.target.value);
    calculateShippingCost(event.target.value, country);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    calculateShippingCost(postcode, event.target.value);
  };

  const calculateShippingCost = (postcode, country) => {
    let cost = 0;
    if (postcode && country) {
      if (country.toLowerCase() === 'usa') {
        cost = 10; // $10 flat rate for USA
      } else {
        cost = 20; // $20 flat rate for other countries
      }
    }
    setShippingCost(cost);
  };

  const getItemDetails = (itemId) => {
    return products.find(item => item.id === itemId);
  };

  const getTotalValue = () => {
    const itemsTotal = cartItems.reduce((total, item) => {
      const product = getItemDetails(item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
    return itemsTotal + shippingCost;
  };

  return (
    <div>
      <div className='main'>
        <div className="column1"></div>
        <div className="column2">
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <h1>Cart</h1>
          </div>
          <br />
          {cartItems.map(cartItem => {
            const product = getItemDetails(cartItem.id);
            if (!product) {
              return null;
            }
            return (
              <div key={cartItem.id}>
                <h3>{product.name}</h3>
                <p>ID: {cartItem.id}</p>
                <p>Price: ${product.price.toFixed(2)}</p>
                <p>Quantity: {cartItem.quantity}</p>
                <p>Format: {cartItem.format}</p>
                <button onClick={() => removeFromCart(cartItem.id, cartItem.quantity)}>Remove All</button>
                <hr />
              </div>
            );
          })}
          {cartItems.length === 0 && <p>Your cart is empty</p>}
          <br />
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
          <br />
          <label>Surname:</label>
          <input type="text" value={surname} onChange={handleSurnameChange} />
          <br />
          <label>Street:</label>
          <input type="text" value={street} onChange={handleStreetChange} />
          <br />
          <label>City:</label>
          <input type="text" value={city} onChange={handleCityChange} />
          <br />
          <label>Postcode:</label>
          <input type="text" value={postcode} onChange={handlePostcodeChange} />
          <br />
          <label>Country:</label>
          <input type="text" value={country} onChange={handleCountryChange} />
          <br />
          {postcode && country && (
            <p>Shipping Cost: ${shippingCost.toFixed(2)}</p>
          )}
          <br />
          {cartItems.length > 0 && (
            <div>
              <h3>Total Value: ${getTotalValue().toFixed(2)}</h3>
            </div>
          )}
          <br />
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default Cart;
