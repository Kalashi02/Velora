
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const { cart, toggleCart } = useCart();
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
    </header>
  );
}

export default Header;
