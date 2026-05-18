// src/pages/Shop.jsx
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filter States
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceTier, setPriceTier] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredProducts = products.filter(p => {
    // Category match
    const categoryMatch = categoryFilter === "all" || (p.category && p.category.toLowerCase() === categoryFilter.toLowerCase());
    
    // Price match
    let priceMatch = true;
    const price = parseFloat(p.price);
    if (priceTier === "under5k") priceMatch = price < 5000;
    else if (priceTier === "5k-10k") priceMatch = price >= 5000 && price <= 10000;
    else if (priceTier === "over10k") priceMatch = price > 10000;
    
    // Search match
    const searchMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()));
                        
    return categoryMatch && priceMatch && searchMatch;
  });

  return (
    <main className="fade-in" style={{ padding: "40px 20px", maxWidth: "1400px", margin: "0 auto", display: "flex", gap: "40px", flexDirection: "row", flexWrap: "wrap" }}>
      
      {/* Sidebar Filters */}
      <aside style={{ flex: "1 1 250px", maxWidth: "300px" }}>
        
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ textTransform: "uppercase", fontSize: "1rem", letterSpacing: "1px", marginBottom: "15px", borderBottom: "1px solid #eaeaea", paddingBottom: "10px" }}>Search</h3>
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "0.95rem" }}
          />
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ textTransform: "uppercase", fontSize: "1rem", letterSpacing: "1px", marginBottom: "15px", borderBottom: "1px solid #eaeaea", paddingBottom: "10px" }}>Style</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {['all', 'heels', 'sandals', 'flats', 'boots'].map(cat => (
              <label key={cat} style={{ display: "flex", alignItems: "center", cursor: "pointer", fontSize: "0.95rem", color: categoryFilter === cat ? "#111" : "#666", fontWeight: categoryFilter === cat ? "600" : "400", textTransform: "capitalize" }}>
                <input 
                  type="radio" 
                  name="category" 
                  value={cat} 
                  checked={categoryFilter === cat} 
                  onChange={(e) => setCategoryFilter(e.target.value)} 
                  style={{ marginRight: "10px" }}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ textTransform: "uppercase", fontSize: "1rem", letterSpacing: "1px", marginBottom: "15px", borderBottom: "1px solid #eaeaea", paddingBottom: "10px" }}>Price Range</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { id: 'all', label: 'All Prices' },
              { id: 'under5k', label: 'Under LKR 5,000' },
              { id: '5k-10k', label: 'LKR 5,000 - 10,000' },
              { id: 'over10k', label: 'Over LKR 10,000' }
            ].map(tier => (
              <label key={tier.id} style={{ display: "flex", alignItems: "center", cursor: "pointer", fontSize: "0.95rem", color: priceTier === tier.id ? "#111" : "#666", fontWeight: priceTier === tier.id ? "600" : "400" }}>
                <input 
                  type="radio" 
                  name="priceTier" 
                  value={tier.id} 
                  checked={priceTier === tier.id} 
                  onChange={(e) => setPriceTier(e.target.value)} 
                  style={{ marginRight: "10px" }}
                />
                {tier.label}
              </label>
            ))}
          </div>
        </div>

        <button 
          onClick={() => {
            setCategoryFilter("all");
            setPriceTier("all");
            setSearchQuery("");
          }}
          style={{ width: "100%", padding: "12px", background: "none", border: "1px solid #111", color: "#111", cursor: "pointer", textTransform: "uppercase", letterSpacing: "1px", fontSize: "0.85rem", transition: "all 0.2s" }}
          onMouseOver={e=>e.currentTarget.style.backgroundColor="#f5f5f5"}
          onMouseOut={e=>e.currentTarget.style.backgroundColor="transparent"}
        >
          Clear Filters
        </button>
      </aside>

      {/* Product Grid */}
      <section style={{ flex: "3 1 600px" }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", paddingBottom: "20px", borderBottom: "1px solid #eaeaea" }}>
           <h2 style={{ fontSize: "1.5rem", fontWeight: "300", textTransform: "uppercase", letterSpacing: "2px", margin: 0 }}>The Collection</h2>
           <span style={{ color: "#777", fontSize: "0.9rem" }}>{filteredProducts.length} Products</span>
        </div>

        {loading ? (
          <div style={{ padding: "50px 0", textAlign: "center" }}>
            <div className="spinner" style={{ width: "40px", height: "40px", border: "3px solid rgba(0,0,0,0.1)", borderTopColor: "#111", borderRadius: "50%", animation: "spin 1s linear infinite", margin: "0 auto 20px" }}></div>
            <p style={{ color: "#555" }}>Curating collection...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div style={{ padding: "80px 20px", textAlign: "center", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
             <h3 style={{ fontSize: "1.2rem", color: "#333", marginBottom: "10px" }}>No products found</h3>
             <p style={{ color: "#777" }}>Try adjusting your filters or search query to find what you're looking for.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "30px" }}>
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        )}
      </section>
      
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}

export default Shop;
