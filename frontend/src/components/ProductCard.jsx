import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useToast } from "../context/ToastContext";

function ProductCard({ p }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToast } = useToast();
  const isWishlisted = wishlist.some(item => item.id === p.id);

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(p.id);
      addToast(`${p.name} removed from wishlist`);
    } else {
      addToWishlist(p);
      addToast(`${p.name} added to wishlist`);
    }
  };

  return (
    <Link to={`/product/${p.id}`} className="fade-in" style={{ textDecoration: "none" }}>
      <div
        style={{
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: "#f5f3f0",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "25px",
          transition: "transform 0.2s ease"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <div style={{ position: "relative", overflow: "hidden", marginBottom: "20px", width: "100%", backgroundColor: "#e2e0db" }}>
          
          <button 
            onClick={handleToggleWishlist}
            style={{ 
              position: "absolute", top: "15px", right: "15px", zIndex: 10,
              background: "rgba(255,255,255,0.8)", border: "none", borderRadius: "50%",
              width: "38px", height: "38px", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s", boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={isWishlisted ? "var(--color-accent)" : "none"} stroke={isWishlisted ? "var(--color-accent)" : "#333"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>

          <img
            src={`/images/${p.image}`}
            alt={p.name}
            style={{
              width: "100%", height: "400px", objectFit: "cover",
              transition: "transform 1s ease"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          />
        </div>
        <h3 style={{
          fontSize: "0.95rem", margin: "0 0 5px 0",
          color: "#111", letterSpacing: "2px", fontWeight: "400", textTransform: "uppercase"
        }}>
          {p.name}
        </h3>
        <p style={{ margin: 0, color: "#777", fontSize: "0.95rem", letterSpacing: "1px", fontWeight: "300" }}>
          RS {p.price}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
