// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 text-white p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold hover:text-gray-400 transition">🏡 Home Decor & Furniture</Link>
//         <Link to="/cart" className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-md shadow-md">
//           🛒 Cart
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// src/components/Navbar.js
// import React from "react";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// const Navbar = () => {
//   const { cart } = useContext(CartContext);

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <Link to="/" className="logo">
//           🏡 Home Decor & Furniture
//         </Link>
//         <div className="nav-links">
//           <Link to="/" className="nav-link">
//             Home
//           </Link>
//           <Link to="/cart" className="nav-link cart-icon">
//             🛒 Cart
//             {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/styles.css";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <h2>Home Decor & Furniture</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
