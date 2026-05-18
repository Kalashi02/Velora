// src/pages/Checkout.jsx
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Optional: scroll to top when mounting the checkout
    window.scrollTo(0, 0);
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 500; // Flat rate shipping
  const total = subtotal > 0 ? subtotal + shipping : 0;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate backend payment and processing sequence
    setTimeout(() => {
      setLoading(false);
      alert("Order placed successfully! Thank you for shopping with Velora.");
      
      // In a real application, you'd execute a CartContext function to empty the cart securely.
      // We will mimic it by returning to the Home page natively.
      navigate("/");
      window.location.reload(); // Quick hack to purge memory cart without extending context interface right now
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <main style={{ padding: "100px 20px", textAlign: "center", minHeight: "60vh" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "300", letterSpacing: "2px", textTransform: "uppercase" }}>Your Cart is Empty</h2>
        <p style={{ margin: "20px 0", color: "#555" }}>Add some elegant shoes before proceeding to checkout.</p>
        <Link to="/shop" style={{ textDecoration: "none", color: "#111", borderBottom: "1px solid #111", paddingBottom: "3px", textTransform: "uppercase", letterSpacing: "1px" }}>Shop Collection</Link>
      </main>
    );
  }

  return (
    <main className="fade-in" style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 20px", display: "flex", gap: "60px", flexWrap: "wrap", alignItems: "flex-start" }}>
      
      {/* Left Column: Form */}
      <div style={{ flex: "1.5", minWidth: "300px" }}>
        <h1 style={{ fontSize: "1.8rem", fontWeight: "300", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 40px 0" }}>
          Checkout
        </h1>

        <form onSubmit={handlePlaceOrder}>
          {/* Contact Details */}
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #eee", paddingBottom: "10px", marginBottom: "20px" }}>Contact Information</h2>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#555", marginBottom: "5px" }}>Email Address</label>
              <input type="email" required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", fontSize: "1rem", boxSizing: "border-box" }} />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#555", marginBottom: "5px" }}>Phone Number</label>
              <input type="tel" required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", fontSize: "1rem", boxSizing: "border-box" }} />
            </div>
          </div>

          {/* Shipping Details */}
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #eee", paddingBottom: "10px", marginBottom: "20px" }}>Shipping Address</h2>
            <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", fontSize: "0.85rem", color: "#555", marginBottom: "5px" }}>First Name</label>
                <input type="text" required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", fontSize: "1rem", boxSizing: "border-box" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", fontSize: "0.85rem", color: "#555", marginBottom: "5px" }}>Last Name</label>
                <input type="text" required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", fontSize: "1rem", boxSizing: "border-box" }} />
              </div>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", fontSize: "0.85rem", color: "#555", marginBottom: "5px" }}>Street Address</label>
              <input type="text" required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", fontSize: "1rem", boxSizing: "border-box" }} />
            </div>
            <div style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", fontSize: "0.85rem", color: "#555", marginBottom: "5px" }}>City</label>
                <input type="text" required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", fontSize: "1rem", boxSizing: "border-box" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", fontSize: "0.85rem", color: "#555", marginBottom: "5px" }}>Postal Code</label>
                <input type="text" required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", fontSize: "1rem", boxSizing: "border-box" }} />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px", borderBottom: "1px solid #eee", paddingBottom: "10px", marginBottom: "20px" }}>Payment</h2>
            <div style={{ border: "1px solid #ddd", padding: "15px", backgroundColor: "#fafafa" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                <input type="radio" name="payment" defaultChecked />
                <span style={{ fontSize: "0.95rem" }}>Cash on Delivery (COD)</span>
              </label>
            </div>
          </div>

          <button 
            type="submit" 
            style={{
              width: "100%", padding: "20px", backgroundColor: "#111", color: "#fff",
              border: "none", fontSize: "1rem", letterSpacing: "2px", textTransform: "uppercase",
              cursor: loading ? "wait" : "pointer", opacity: loading ? 0.7 : 1, transition: "background-color 0.2s"
            }}
            onMouseOver={e => { if(!loading) e.currentTarget.style.backgroundColor = "#333"; }}
            onMouseOut={e => { if(!loading) e.currentTarget.style.backgroundColor = "#111"; }}
          >
            {loading ? "Processing..." : "Place Order"}
          </button>
        </form>
      </div>

      {/* Right Column: Order Summary */}
      <div style={{ flex: "1", minWidth: "300px", backgroundColor: "#FAFAFA", padding: "30px", border: "1px solid #eee", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: "400", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 20px 0" }}>Order Summary</h2>
        
        <div style={{ maxHeight: "350px", overflowY: "auto", borderBottom: "1px solid #ddd", paddingBottom: "20px", marginBottom: "20px" }}>
          {cart.map(item => (
            <div key={item.cartId} style={{ display: "flex", gap: "15px", marginBottom: "15px" }}>
              <img src={`/images/${item.image}`} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "cover", border: "1px solid #ddd" }} />
              <div style={{ flex: 1 }}>
                <p style={{ margin: "0 0 5px 0", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", color: "#111" }}>{item.name}</p>
                <p style={{ margin: "0 0 5px 0", fontSize: "0.8rem", color: "#777" }}>Size: EU {item.selectedSize}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.85rem", color: "#555" }}>Qty: {item.quantity}</span>
                  <span style={{ fontSize: "0.9rem", color: "#333" }}>RS {item.price * item.quantity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", fontSize: "0.95rem", color: "#555" }}>
          <span>Subtotal</span>
          <span>RS {subtotal}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", fontSize: "0.95rem", color: "#555" }}>
          <span>Shipping (Flat Rate)</span>
          <span>RS {shipping}</span>
        </div>
        
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "20px", borderTop: "1px solid #ddd", fontSize: "1.2rem", fontWeight: "600", color: "#111" }}>
          <span>Total</span>
          <span>RS {total}</span>
        </div>
      </div>

    </main>
  );
}

export default Checkout;
