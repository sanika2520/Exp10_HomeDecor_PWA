// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// const ProductCard = ({ product }) => {
//   const { addToCart } = useContext(CartContext);

//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
//       <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//       <div className="p-4 text-center">
//         <h2 className="text-lg font-semibold">{product.name}</h2>
//         <p className="text-gray-600 text-md">{product.price}</p>
//         <button 
//           onClick={() => addToCart(product)} 
//           className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



// src/components/ProductCard.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image" 
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = "https://via.placeholder.com/300x200?text=Product+Image";
        }}
      />
      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-price">{product.price}</p>
        <button 
          onClick={() => addToCart(product)} 
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;