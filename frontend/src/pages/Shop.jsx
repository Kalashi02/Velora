// src/pages/Shop.jsx
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <main className="fade-in" style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      
      {/* Category Header resembling clean structure */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
        <div style={{ display: "flex", gap: "30px", textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "2px" }}>
          <span 
            style={{ fontWeight: filter === "all" ? "600" : "400", cursor: "pointer", color: filter === "all" ? "#111" : "#777" }} 
            onClick={() => setFilter("all")}
          >Collections</span>
          <span 
            style={{ fontWeight: filter === "heels" ? "600" : "400", cursor: "pointer", color: filter === "heels" ? "#111" : "#777" }} 
            onClick={() => setFilter("heels")}
          >Heels</span>
          <span 
            style={{ fontWeight: filter === "sandals" ? "600" : "400", cursor: "pointer", color: filter === "sandals" ? "#111" : "#777" }} 
            onClick={() => setFilter("sandals")}
          >Sandals</span>
        </div>
      </div>

      {loading ? (
        <p style={{ textAlign: "center", fontSize: "1.2rem", color: "#555" }}>Loading collection...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Shop;
