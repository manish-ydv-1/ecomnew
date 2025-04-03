import React, { useState, useEffect } from "react";

const Cart = () => {
  // Initialize cart items from localStorage (in case of page reload)
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Get cart items from localStorage if available
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1); // Remove item from the array
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save the updated cart to localStorage
  };

  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart"); // Clear the cart in localStorage
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Handle increase in quantity
  const handleIncreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1; // Increase the quantity
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save the updated cart to localStorage
  };

  // Handle decrease in quantity
  const handleDecreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1; // Decrease the quantity, but don't go below 1
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save the updated cart to localStorage
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert(
        "Your cart is empty! Please add products to the cart before proceeding."
      );
    } else {
      alert("Proceeding to Checkout... Payment process can be added here.");
      // Replace this alert with the actual checkout logic, like:
      // - Redirect to a checkout page.
      // - Call an API to process the payment.
      // - Show a confirmation message.
    }
  };

  return (
    <div className="cart-page container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Start shopping!</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-4 border-b"
              >
                <div>
                  <h3 className="text-xl">{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-800"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="flex justify-between mt-6">
            <p className="text-xl font-semibold">
              Total: ${calculateTotal().toFixed(2)}
            </p>
            <div className="flex ">
              {" "}
              <button
                className="bg-green-600 text-white py-2 px-6 rounded transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 mr-2"
                onClick={handleCheckout}
              >
                Buy
              </button>
              <button
                className="bg-blue-600 text-white py-2 px-6 rounded"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
