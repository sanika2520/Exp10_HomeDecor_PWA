// import React from "react";
// import products from "../data/products";
// import ProductCard from "../components/ProductCard";

// const HomePage = () => {
//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Home Decor & Furniture</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;



// src/pages/HomePage.js
// import React from "react";
// import products from "../data/products";
// import ProductCard from "../components/ProductCard";

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <div className="hero">
//         <div className="hero-content">
//           <h1>Elevate Your Space</h1>
//           <p>Discover premium home decor that transforms your house into a home</p>
//           <button className="btn btn-primary">Shop Now</button>
//         </div>
//       </div>
//       <div className="products-section container">
//         <h2 className="section-title">Featured Products</h2>
//         <div className="products-grid">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React from "react";
// import { useCart } from "../context/CartContext";
// import "../styles/styles.css";

// const products = [
//   { id: 1, name: "Wooden Dining Table", price: "₹6,999", image: "/images/image2.jpg" },
//   { id: 2, name: "Modern Sofa Set", price: "₹7,999", image: "/images/image1.jpg" },
//   { id: 3, name: "Luxury Bed", price: "₹14,499", image: "/images/image3.jpg" },
//   { id: 4, name: "Decorative Lamp", price: "₹3,799", image: "/images/image4.webp" },
// ];

// const HomePage = () => {
//   const { addToCart } = useCart();

//   return (
//     <div className="home-container">
//       <h1>Home Decor & Furniture</h1>
//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>{product.price}</p>
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;



import React from "react";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import "../styles/styles.css";

const HomePage = () => {
  const { addToCart } = useCart();

  return (
    <div className="home-container">
      <h1>Home Decor & Furniture</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
