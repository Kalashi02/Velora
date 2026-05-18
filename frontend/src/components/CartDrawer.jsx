// src/components/CartDrawer.jsx
import { useCart } from '../context/CartContext';

function CartDrawer() {
  const { cart, isCartOpen, toggleCart, updateQuantity, removeFromCart } = useCart();
  
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={toggleCart}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1000,
          animation: "fadeIn 0.3s forwards"
        }}
      />
      
      {/* Drawer */}
      <div className="glass-panel" style={{
        position: "fixed",
        top: 0,
        right: 0,
        height: "100vh",
        width: "100%",
        maxWidth: "400px",
        zIndex: 1001,
        backgroundColor: "var(--color-primary)",
        boxShadow: "-5px 0 15px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        animation: "slideInRight 0.3s forwards",
        overflowY: "auto"
      }}>
        <div style={{ padding: "20px", borderBottom: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-heading)" }}>Your Cart</h2>
          <button onClick={toggleCart} style={{ background: "none", border: "none", fontSize: "1.8rem", cursor: "pointer", color: "var(--color-text-dark)", transition: "color var(--transition-fast)" }} onMouseOver={(e) => e.currentTarget.style.color = "var(--color-accent)"} onMouseOut={(e) => e.currentTarget.style.color = "var(--color-text-dark)"}>
            &times;
          </button>
        </div>
        
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          {cart.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--color-text-muted)", marginTop: "40px" }}>Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={item.cartId} style={{ display: "flex", gap: "15px", marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid var(--color-border)" }}>
                <img src={`/images/${item.image}`} alt={item.name} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: "0 0 2px 0", fontSize: "1rem" }}>{item.name}</h4>
                  <p style={{ margin: "0 0 5px 0", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Size: EU {item.selectedSize}</p>
                  <p style={{ margin: "0 0 10px 0", color: "var(--color-accent)", fontWeight: "600" }}>Rs. {item.price}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button className="btn-outline" style={{ padding: "2px 8px" }} onClick={() => updateQuantity(item.cartId, -1)}>-</button>
                    <span style={{ fontWeight: "500" }}>{item.quantity}</span>
                    <button className="btn-outline" style={{ padding: "2px 8px" }} onClick={() => updateQuantity(item.cartId, 1)}>+</button>
                    <button onClick={() => removeFromCart(item.cartId)} style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)", textDecoration: "underline", fontSize: "0.85rem" }}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {cart.length > 0 && (
          <div style={{ padding: "20px", borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-bg-light)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
              <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>Total</span>
              <span style={{ fontSize: "1.2rem", fontWeight: "600", color: "var(--color-accent)" }}>Rs. {total}</span>
            </div>
            <button className="btn-primary" style={{ width: "100%", padding: "15px", fontSize: "1.1rem" }}>Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartDrawer;
