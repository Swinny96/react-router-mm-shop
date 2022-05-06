import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

// Components
import Header from "./components/header";
import Footer from "./components/footer";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop.js";

function App() {
  const [cartIsEmpty] = useState(false);

  return (
    <div className="layout">
      <Header />
      <BrowserRouter>
        <nav className="Sidebar2">
          <ul className="Sidebar-Ul">
            <li class="Sidebar-Li2">
              <NavLink to="/" className="Sidebar-Link2">
                <span class="sk-jumpbar-item-icon sk-icon sk-icon-home Sidebar-Icon2"></span>
                <span class="Sidebar-Text2">Welcome</span>
              </NavLink>
            </li>
            <li class="Sidebar-Li2">
              <NavLink to="/about" className="Sidebar-Link2">
                <span class="sk-jumpbar-item-icon sk-icon sk-icon-dashboard Sidebar-Icon2"></span>
                <span class="Sidebar-Text2">About</span>
              </NavLink>
            </li>
            <li class="Sidebar-Li2">
              <NavLink to="/shop" className="Sidebar-Link2">
                <span class="sk-jumpbar-item-icon sk-icon sk-icon-shopping-trolley Sidebar-Icon2"></span>
                <span class="Sidebar-Text2">Shop</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shop/:id/*" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/test"
            element={
              <div>
                <h2>Test page</h2>
              </div>
            }
          />
          <Route path="/redirect" element={<Navigate to="/about" />} />
          <Route
            path="/checkout"
            element={
              cartIsEmpty ? <Navigate to="/products" /> : <p>checkout</p>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
