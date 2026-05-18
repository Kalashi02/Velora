// src/components/WishlistDrawer.jsx
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

function WishlistDrawer() {
  const { wishlist, isWishlistOpen, toggleWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const handleMoveToCart = (product) => {
    // Default size to 38 if moving directly from wishlist
    addToCart({ ...product, selectedSize: 38 });
    removeFromWishlist(product.id);
    addToast(`${product.name} moved to cart`);
  };

  return (
    <>
      <div 
        style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)", zIndex: 2000,
          opacity: isWishlistOpen ? 1 : 0, visibility: isWishlistOpen ? "visible" : "hidden", transition: "all 0.3s"
        }}
        onClick={toggleWishlist}
      />
      <div
        style={{
          position: "fixed", top: 0, right: isWishlistOpen ? 0 : "-450px",
          width: "400px", maxWidth: "90%", height: "100%",
          backgroundColor: "#fff", zIndex: 2001, transition: "right 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          display: "flex", flexDirection: "column", boxShadow: "-5px 0 30px rgba(0,0,0,0.15)"
        }}
      >
        <div style={{ padding: "20px 30px", borderBottom: "1px solid #eaeaea", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0, fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>Your Wishlist ({wishlist.length})</h2>
          <button onClick={toggleWishlist} style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "#333" }}>&times;</button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          {wishlist.length === 0 ? (
            <div style={{ textAlign: "center", marginTop: "40px", color: "#777" }}>Your wishlist is beautifully empty.</div>
          ) : (
            wishlist.map(item => (
              <div key={item.id} style={{ display: "flex", gap: "15px", marginBottom: "25px", alignItems: "center" }}>
                <img src={`/images/${item.image}`} alt={item.name} style={{ width: "80px", height: "80px", objectFit: "contain", borderRadius: "10px", backgroundColor: "#f9f6f5" }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: "0 0 5px 0", fontSize: "0.95rem" }}>{item.name}</h4>
                  <p style={{ margin: 0, color: "#555", fontWeight: "600" }}>RS {item.price}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <button onClick={() => handleMoveToCart(item)} style={{ background: "#111", color: "#fff", border: "none", padding: "8px", borderRadius: "4px", fontSize: "0.75rem", cursor: "pointer", textTransform: "uppercase", letterSpacing: "1px" }}>Move to Cart</button>
                  <button onClick={() => removeFromWishlist(item.id)} style={{ background: "none", border: "none", padding: "4px", fontSize: "0.75rem", color: "#777", cursor: "pointer", textDecoration: "underline" }}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default WishlistDrawer;
