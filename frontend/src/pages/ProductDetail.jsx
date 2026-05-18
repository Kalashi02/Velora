// src/pages/ProductDetail.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToast } = useToast();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const sizes = [3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    // Fetch product by ID
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        // String to number conversion for robust matching
        const found = data.find(p => p.id.toString() === id.toString());
        setProduct(found);
      })
      .catch((err) => console.error("Error:", err));
  }, [id]);

  if (!product) return <div style={{ padding: "100px", textAlign: "center" }}>Loading details...</div>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first!");
      return;
    }
    addToCart({ ...product, selectedSize });
    addToast(`${product.name} added to cart`);
  };

  return (
    <main className="fade-in" style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      
      {/* Optional Breadcrumb */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => navigate('/shop')} style={{ background: "none", border: "none", cursor: "pointer", textDecoration: "underline", color: "#555" }}>
          &larr; Back to Shop
        </button>
      </div>

      <div style={{ display: "flex", gap: "50px", alignItems: "flex-start", flexWrap: "wrap" }}>
        
        {/* LEFT SIDE: Thumbnails and Main Image */}
        <div style={{ flex: "1.2", display: "flex", gap: "20px", minWidth: "300px" }}>
          
          {/* Thumbnails placeholder */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "80px", flexShrink: 0 }}>
            {[1, 2, 3, 4].map(num => (
              <img 
                key={num} 
                src={`/images/${product.image}`} 
                alt={`${product.name} angle ${num}`} 
                style={{ 
                  width: "100%", height: "100px", objectFit: "cover", 
                  cursor: "pointer", opacity: num === 1 ? 1 : 0.4,
                  border: num === 1 ? "1px solid #111" : "1px solid transparent"
                }} 
              />
            ))}
          </div>
          
          {/* Main Image */}
          <div style={{ flex: 1, backgroundColor: "#EAEAEA", display: "flex", justifyContent: "center" }}>
            <img 
              src={`/images/${product.image}`} 
              alt={product.name} 
              style={{ width: "100%", height: "auto", objectFit: "cover", minHeight: "500px" }} 
            />
          </div>
        </div>

        {/* RIGHT SIDE: Product Details */}
        <div style={{ flex: "1", display: "flex", flexDirection: "column", minWidth: "300px", paddingTop: "20px" }}>
          
          <h1 style={{ fontSize: "2rem", fontWeight: "300", letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 15px 0" }}>
            {product.name}
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#555", margin: "0 0 30px 0", letterSpacing: "1px" }}>
            RS {product.price}
          </p>

          <div style={{ height: "1px", backgroundColor: "#eee", margin: "20px 0 30px 0" }}></div>

          <p style={{ margin: "0 0 10px 0", fontSize: "0.95rem" }}>Color: <strong>Standard</strong></p>
          <div style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
            <img 
              src={`/images/${product.image}`} 
              alt="color box" 
              style={{ width: "50px", height: "60px", objectFit: "cover", border: "1px solid #111", padding: "2px" }} 
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px", maxWidth: "80%" }}>
            <span style={{ fontSize: "0.95rem" }}>Size:</span>
            <button 
              onClick={() => setIsSizeChartOpen(true)} 
              style={{ background: "none", border: "none", textDecoration: "underline", fontSize: "0.9rem", cursor: "pointer", color: "#555" }}
            >
              Size chart
            </button>
          </div>

          <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginBottom: "40px", maxWidth: "80%" }}>
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  flex: "1 1 12%", height: "45px", minWidth: "40px",
                  border: selectedSize === size ? "2px solid #111" : "1px solid #e0e0e0",
                  backgroundColor: selectedSize === size ? "#fafafa" : "transparent",
                  color: selectedSize === size ? "#111" : "#555",
                  fontSize: "0.95rem", cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                {size}
              </button>
            ))}
          </div>

          <button 
            onClick={handleAddToCart}
            style={{
              width: "80%", padding: "20px", backgroundColor: "#111", color: "#fff",
              border: "none", fontSize: "0.95rem", letterSpacing: "2px", textTransform: "uppercase",
              cursor: "pointer", opacity: selectedSize ? 1 : 0.6, transition: "background-color 0.2s"
            }}
            onMouseOver={e => { if(selectedSize) e.currentTarget.style.backgroundColor = "#333"; }}
            onMouseOut={e => { if(selectedSize) e.currentTarget.style.backgroundColor = "#111"; }}
          >
            ADD TO CART
          </button>
          
          <p style={{ marginTop: "30px", fontSize: "0.9rem", color: "#777", lineHeight: "1.6" }}>
            {product.description}
          </p>
        </div>
      </div>

      {/* Embedded Size Chart Modal */}
      {isSizeChartOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)", zIndex: 2000, display: "flex", justifyContent: "center", alignItems: "center",
          animation: "fadeIn 0.2s"
        }} onClick={() => setIsSizeChartOpen(false)}>
          <div style={{ 
            backgroundColor: "#fff", padding: "30px 40px", width: "90%", maxWidth: "700px", 
            textAlign: "center", position: "relative", maxHeight: "90vh", overflowY: "auto",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }} onClick={e => e.stopPropagation()}>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "20px", borderBottom: "1px solid #eee", marginBottom: "10px" }}>
              <h3 style={{ margin: 0, fontWeight: "500", letterSpacing: "2px", textTransform: "uppercase", fontSize: "1rem", flex: 1, textAlign: "center" }}>SIZE GUIDE</h3>
              <button 
                onClick={() => setIsSizeChartOpen(false)} 
                style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "#555", position: "absolute", right: "30px" }}
              >&#x2715;</button>
            </div>
            
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem", color: "#555" }}>
              <thead>
                <tr>
                  <th style={{ padding: "15px 10px", fontWeight: "500", color: "#999", fontSize: "0.85rem", letterSpacing: "1px" }}>SHOE SIZE</th>
                  <th style={{ padding: "15px 10px", fontWeight: "500", color: "#999", fontSize: "0.85rem", letterSpacing: "1px" }}>FOOT LENGTH IN CM</th>
                  <th style={{ padding: "15px 10px", fontWeight: "500", color: "#999", fontSize: "0.85rem", letterSpacing: "1px" }}>FOOT LENGTH IN INCHES</th>
                </tr>
              </thead>
              <tbody>
                 <tr style={{ borderTop: "1px solid #eee" }}>
                   <td style={{ padding: "18px 10px" }}>35/3</td><td style={{ padding: "18px 10px" }}>21.5 - 22.0</td><td style={{ padding: "18px 10px" }}>8.46 - 8.66</td>
                 </tr>
                 <tr style={{ borderTop: "1px solid #eee" }}>
                   <td style={{ padding: "18px 10px" }}>36/4</td><td style={{ padding: "18px 10px" }}>22.2 - 22.5</td><td style={{ padding: "18px 10px" }}>8.75 - 8.87</td>
                 </tr>
                 <tr style={{ borderTop: "1px solid #eee" }}>
                   <td style={{ padding: "18px 10px" }}>37/5</td><td style={{ padding: "18px 10px" }}>23.0 - 23.5</td><td style={{ padding: "18px 10px" }}>9.06 - 9.25</td>
                 </tr>
                 <tr style={{ borderTop: "1px solid #eee" }}>
                   <td style={{ padding: "18px 10px" }}>38/6</td><td style={{ padding: "18px 10px" }}>23.8 - 24.1</td><td style={{ padding: "18px 10px" }}>9.37 - 9.50</td>
                 </tr>
                 <tr style={{ borderTop: "1px solid #eee" }}>
                   <td style={{ padding: "18px 10px" }}>39/7</td><td style={{ padding: "18px 10px" }}>24.6 - 25.1</td><td style={{ padding: "18px 10px" }}>9.68 - 9.87</td>
                 </tr>
                 <tr style={{ borderTop: "1px solid #eee" }}>
                   <td style={{ padding: "18px 10px" }}>40/8</td><td style={{ padding: "18px 10px" }}>25.4 - 25.9</td><td style={{ padding: "18px 10px" }}>10.00 - 10.18</td>
                 </tr>
                 <tr style={{ borderTop: "1px solid #eee" }}>
                   <td style={{ padding: "18px 10px" }}>41/9</td><td style={{ padding: "18px 10px" }}>26.2 - 26.7</td><td style={{ padding: "18px 10px" }}>10.31 - 10.50</td>
                 </tr>
                 <tr style={{ borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
                   <td style={{ padding: "18px 10px" }}>42/10</td><td style={{ padding: "18px 10px" }}>27.0 - 27.5</td><td style={{ padding: "18px 10px" }}>10.62 - 10.82</td>
                 </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}

export default ProductDetail;
