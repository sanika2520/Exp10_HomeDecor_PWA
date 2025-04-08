



// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CartProvider from "./context/CartContext";
// import HomePage from "./pages/HomePage";
// import CartPage from "./pages/CartPage";
// import Navbar from "./components/Navbar";
// import "./styles/styles.css";

// function App() {
//   return (
//     <CartProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/cart" element={<CartPage />} />
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartContext";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import "./styles/styles.css";

function App() {
  return (
    <CartProvider>
      <Router basename="/Exp10_HomeDecor_PWA">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
