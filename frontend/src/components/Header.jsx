
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Header() {
  const { cart, toggleCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="glass-panel" style={{
      position: "sticky",
      top: 0,
      zIndex: 1000,
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2px"
    }}>
      {/* Logo */}
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/images/velora-logo.png"
          alt="Velora Logo"
          style={{ height: "80px", width: "auto", transition: "transform var(--transition-fast)" }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        />
      </Link>

      {/* Navigation */}
      <nav style={{ display: "flex", gap: "30px" }}>
        <Link
          to="/"
          style={{ fontWeight: "500", padding: "8px 0" }}
          onMouseOver={(e) => e.currentTarget.style.color = "var(--color-accent)"}
          onMouseOut={(e) => e.currentTarget.style.color = "var(--color-text-dark)"}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{ fontWeight: "500", padding: "8px 0" }}
          onMouseOver={(e) => e.currentTarget.style.color = "var(--color-accent)"}
          onMouseOut={(e) => e.currentTarget.style.color = "var(--color-text-dark)"}
        >
          About Us
        </Link>
        <Link
          to="/shop"
          style={{ fontWeight: "500", padding: "8px 0" }}
          onMouseOver={(e) => e.currentTarget.style.color = "var(--color-accent)"}
          onMouseOut={(e) => e.currentTarget.style.color = "var(--color-text-dark)"}
        >
          Shop
        </Link>
        <Link
          to="/contact"
          style={{ fontWeight: "500", padding: "8px 0" }}
          onMouseOver={(e) => e.currentTarget.style.color = "var(--color-accent)"}
          onMouseOut={(e) => e.currentTarget.style.color = "var(--color-text-dark)"}
        >
          Contact
        </Link>
      </nav>

      {/* Control Actions */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {/* Wishlist button */}
        <button 
          onClick={toggleWishlist}
          style={{ 
            cursor: "pointer", 
            fontWeight: "600", 
            border: "1px solid transparent", 
            padding: "8px", 
            borderRadius: "50%",
            background: "none",
            color: "var(--color-text-dark)",
            transition: "all var(--transition-fast)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}
          onMouseOver={(e) => e.currentTarget.style.color = "var(--color-accent)"}
          onMouseOut={(e) => e.currentTarget.style.color = "var(--color-text-dark)"}
          aria-label="Wishlist"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill={wishlist.length > 0 ? "var(--color-accent)" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          {wishlist.length > 0 && <span style={{ marginLeft: "5px", fontSize: "0.9rem" }}>{wishlist.length}</span>}
        </button>

        {/* Cart button */}
        <button
          onClick={toggleCart}
          style={{
            cursor: "pointer",
            fontWeight: "600",
            border: "1px solid var(--color-border)",
            padding: "8px 16px",
            borderRadius: "20px",
            background: "none",
            fontFamily: "var(--font-body)",
            color: "var(--color-text-dark)",
            transition: "all var(--transition-fast)"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-secondary)";
            e.currentTarget.style.color = "var(--color-accent)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--color-text-dark)";
          }}
        >
          🛒 Cart ({itemCount})
        </button>
      </div>
    </header>
  );
}

export default Header;
