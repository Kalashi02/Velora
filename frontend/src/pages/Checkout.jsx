// src/pages/Checkout.jsx
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  useEffect(() => {
    // Optional: scroll to top when mounting the checkout
    window.scrollTo(0, 0);
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 450; // flat rate matching the screenshot
  const total = subtotal > 0 ? subtotal + shipping : 0;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate backend payment and processing sequence
    setTimeout(() => {
      setLoading(false);
      alert("Order placed successfully! Thank you for shopping with Velora.");
      
      // Navigate to Home
      navigate("/");
      window.location.reload(); 
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
    <div className="checkout-container fade-in">
      {/* Left Column: Form */}
      <div className="checkout-left">
        <h1 className="checkout-header">VELORA</h1>
        
        <form onSubmit={handlePlaceOrder}>
          {/* Contact Details */}
          <div className="checkout-section">
            <h2 className="checkout-section-title">
              Contact
              <span style={{ fontSize: "0.85rem", fontWeight: "400", cursor: "pointer", textDecoration: "underline", color: "#555" }}>Sign In</span>
            </h2>
            <input type="email" placeholder="Email" required className="checkout-input" style={{ marginBottom: "12px" }} />
            <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", color: "#555", cursor: "pointer" }}>
              <input type="checkbox" defaultChecked />
              Email me with news and offers
            </label>
          </div>

          {/* Delivery Details */}
          <div className="checkout-section">
            <h2 className="checkout-section-title">Delivery</h2>
            
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <button type="button" style={{ flex: 1, padding: "14px", border: "1px solid var(--color-accent)", borderBottomLeftRadius: "4px", borderTopLeftRadius: "4px", backgroundColor: "#fcf8f9", borderRight: "none", color: "var(--color-text-dark)", fontWeight: "500", fontSize: "0.95rem" }}>
                Ship
              </button>
              <button type="button" style={{ flex: 1, padding: "14px", border: "1px solid #d9d9d9", borderBottomRightRadius: "4px", borderTopRightRadius: "4px", backgroundColor: "#fafafa", color: "#777", fontSize: "0.95rem" }}>
                Pickup
              </button>
            </div>

            <input type="text" placeholder="Country/Region (e.g. Sri Lanka)" defaultValue="Sri Lanka" required className="checkout-input" />
            
            <div className="checkout-input-row">
              <input type="text" placeholder="First name" required className="checkout-input" />
              <input type="text" placeholder="Last name" required className="checkout-input" />
            </div>
            
            <input type="text" placeholder="Address" required className="checkout-input" />
            <input type="text" placeholder="Apartment, suite, etc. (optional)" className="checkout-input" />
            
            <div className="checkout-input-row">
              <input type="text" placeholder="City" required className="checkout-input" />
              <input type="text" placeholder="Postal code (optional)" className="checkout-input" />
            </div>
            
            <input type="tel" placeholder="Phone" required className="checkout-input" style={{ marginBottom: "12px" }} />
            <label style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", color: "#555", cursor: "pointer" }}>
              <input type="checkbox" />
              Save this information for next time
            </label>
          </div>

          {/* Shipping Method */}
          <div className="checkout-section">
            <h2 className="checkout-section-title">Shipping method</h2>
            <div className="checkout-box">
              <div className="checkout-box-row" style={{ backgroundColor: "#fafafa" }}>
                <span style={{ fontSize: "0.95rem", color: "#333" }}>Delivery</span>
                <span style={{ fontWeight: "500", color: "#333" }}>Rs {shipping.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="checkout-section">
            <h2 className="checkout-section-title">Payment</h2>
            <p style={{ fontSize: "0.85rem", color: "#555", margin: "-10px 0 15px 0" }}>All transactions are secure and encrypted.</p>
            <div className="checkout-box">
              <div className={`checkout-box-row ${paymentMethod === 'card' ? 'active' : ''}`} onClick={() => setPaymentMethod('card')} style={{ borderBottom: "1px solid #d9d9d9" }}>
                <label className="checkout-radio-label">
                  <input type="radio" name="payment" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                  Bank Card / Bank Account - PayHere
                </label>
              </div>
              {paymentMethod === 'card' && (
                <div style={{ padding: "25px", textAlign: "center", backgroundColor: "#fafafa", fontSize: "0.9rem", color: "#555", borderBottom: "1px solid #d9d9d9" }}>
                  You'll be redirected to Bank Card / Bank Account - PayHere to complete your purchase.
                </div>
              )}
              
              <div className={`checkout-box-row ${paymentMethod === 'cod' ? 'active' : ''}`} onClick={() => setPaymentMethod('cod')}>
                <label className="checkout-radio-label">
                  <input type="radio" name="payment" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                  Cash on Delivery (COD)
                </label>
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            style={{
              width: "100%", padding: "20px", backgroundColor: "var(--color-text-dark)", color: "#fff",
              border: "none", fontSize: "1.1rem", borderRadius: "6px",
              cursor: loading ? "wait" : "pointer", opacity: loading ? 0.8 : 1, transition: "background-color 0.2s"
            }}
            onMouseOver={e => { if(!loading) e.currentTarget.style.backgroundColor = "var(--color-accent)"; }}
            onMouseOut={e => { if(!loading) e.currentTarget.style.backgroundColor = "var(--color-text-dark)"; }}
          >
            {loading ? "Processing..." : "Pay now"}
          </button>
        </form>
      </div>

      {/* Right Column: Order Summary */}
      <div className="checkout-right">
        <div style={{ marginBottom: "30px" }}>
          {cart.map(item => (
            <div key={item.cartId} style={{ display: "flex", gap: "20px", alignItems: "center", marginBottom: "20px" }}>
              <div style={{ position: "relative" }}>
                <img src={`/images/${item.image}`} alt={item.name} style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "8px", border: "1px solid #e1e1e1", backgroundColor: "#fff" }} />
                <span style={{ position: "absolute", top: "-10px", right: "-10px", backgroundColor: "rgba(119,119,119,0.9)", color: "#fff", width: "22px", height: "22px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontWeight: "600" }}>
                  {item.quantity}
                </span>
              </div>
              <div style={{ flex: 1, fontSize: "0.9rem" }}>
                <p style={{ margin: "0 0 5px 0", fontWeight: "500", color: "#333", fontSize: "0.95rem" }}>{item.name}</p>
                <p style={{ margin: "0", color: "#777", fontSize: "0.85rem" }}>EU {item.selectedSize}</p>
              </div>
              <div style={{ fontSize: "0.95rem", fontWeight: "500", color: "#333" }}>
                Rs {(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "10px", marginBottom: "30px", borderBottom: "1px solid #d9d9d9", paddingBottom: "30px" }}>
          <input type="text" placeholder="Discount code or gift card" className="checkout-input" style={{ marginBottom: 0, flex: 1 }} />
          <button style={{ padding: "0 20px", backgroundColor: "#f0f0f0", color: "#777", border: "1px solid #d9d9d9", borderRadius: "4px", fontWeight: "500", fontSize: "0.9rem", transition: "all 0.2s" }} onMouseOver={e => e.currentTarget.style.backgroundColor = "#e8e8e8"} onMouseOut={e => e.currentTarget.style.backgroundColor = "#f0f0f0"}>Apply</button>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", fontSize: "0.95rem", color: "#555" }}>
          <span>Subtotal</span>
          <span style={{ fontWeight: "500", color: "#333" }}>Rs {subtotal.toFixed(2)}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "25px", fontSize: "0.95rem", color: "#555" }}>
          <span>Shipping</span>
          <span style={{ fontWeight: "500", color: "#333" }}>Rs {shipping.toFixed(2)}</span>
        </div>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "25px", borderTop: "1px solid #d9d9d9", fontWeight: "600" }}>
          <span style={{ fontSize: "1.1rem", color: "#333" }}>Total</span>
          <span style={{ fontSize: "1.5rem", color: "#111" }}>
            <span style={{ fontSize: "0.85rem", color: "#777", marginRight: "10px", fontWeight: "normal" }}>LKR</span>
            Rs {total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
