// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import CartDrawer from "./components/CartDrawer";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import { FAQ, Shipping, Returns, PrivacyPolicy } from "./pages/Policies";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import NewsletterPopup from "./components/NewsletterPopup";

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <Router>
          <Header />
          <CartDrawer />
          <NewsletterPopup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<OrderSuccess />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
    </ToastProvider>
  );
}

export default App;


