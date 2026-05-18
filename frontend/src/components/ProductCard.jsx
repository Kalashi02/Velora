// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

function ProductCard({ p }) {
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
        <div style={{ overflow: "hidden", marginBottom: "20px", width: "100%", backgroundColor: "#e2e0db" }}>
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
