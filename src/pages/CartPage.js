// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// const CartPage = () => {
//   const { cart, removeFromCart } = useContext(CartContext);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {cart.map((product) => (
//             <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//               <div className="p-4 text-center">
//                 <h2 className="text-lg font-semibold">{product.name}</h2>
//                 <p className="text-gray-600">{product.price}</p>
//                 <button 
//                   onClick={() => removeFromCart(product.id)} 
//                   className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md transition"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;


// src/pages/CartPage.js
// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// const CartPage = () => {
//   const { cart, removeFromCart } = useContext(CartContext);

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => {
//       return total + Number(item.price.replace('$', ''));
//     }, 0);
//   };

//   return (
//     <div className="cart-page container">
//       <h1 className="cart-title">Your Cart</h1>
//       {cart.length === 0 ? (
//         <p className="empty-cart">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="cart-items">
//             {cart.map((product) => (
//               <div key={product.id} className="cart-item">
//                 <img 
//                   src={product.image} 
//                   alt={product.name} 
//                   className="cart-item-image"
//                   onError={(e) => {
//                     e.target.onerror = null; 
//                     e.target.src = "https://via.placeholder.com/300x200?text=Product+Image";
//                   }}
//                 />
//                 <div className="cart-item-details">
//                   <h3 className="cart-item-title">{product.name}</h3>
//                   <p className="cart-item-price">{product.price}</p>
//                   <button 
//                     onClick={() => removeFromCart(product.id)} 
//                     className="btn btn-outline"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="cart-summary">
//             <h3 className="summary-title">Order Summary</h3>
//             <div className="summary-row">
//               <span>Subtotal</span>
//               <span>${calculateTotal()}</span>
//             </div>
//             <div className="summary-row">
//               <span>Shipping</span>
//               <span>Free</span>
//             </div>
//             <div className="summary-row summary-total">
//               <span>Total</span>
//               <span>${calculateTotal()}</span>
//             </div>
//             <button className="btn btn-primary checkout-btn">
//               Proceed to Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;



import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/styles.css";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
