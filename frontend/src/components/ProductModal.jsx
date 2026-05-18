// src/components/ProductModal.jsx
import { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductModal({ product, onClose, onOpenSizeChart }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = [36, 37, 38, 39, 40];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first!");
      return;
    }
    addToCart({ ...product, selectedSize });
    onClose(); 
  };

  if (!product) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1500,
      display: "flex", justifyContent: "center", alignItems: "center",
      animation: "fadeIn 0.2s forwards"
    }} onClick={onClose}>
      
      {/* Modal Container */}
      <div 
        onClick={e => e.stopPropagation()} 
        style={{
          backgroundColor: "#F9F6F5",
          width: "90%", maxWidth: "900px", 
          display: "flex", position: "relative",
          boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          overflow: "hidden",
          borderRadius: "0px" // Sharp corners to match the reference style
        }}
      >
        <button 
          onClick={onClose}
          style={{ 
            position: "absolute", top: "15px", right: "20px", 
            background: "none", border: "none", fontSize: "2rem", 
            cursor: "pointer", color: "#333", zIndex: 10 
          }}
        >&times;</button>
        
        {/* Left Side: Image and Name (as explicitly requested) */}
        <div style={{ 
          flex: "1.2", backgroundColor: "#EFEBE8", padding: "40px",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
        }}>
          <img
            src={`/images/${product.image}`}
            alt={product.name}
            style={{ width: "100%", height: "auto", objectFit: "contain", maxHeight: "350px", marginBottom: "30px" }}
          />
          <h2 style={{ 
            fontSize: "1.8rem", margin: "0", 
            fontWeight: "400", letterSpacing: "3px", textTransform: "uppercase", 
            color: "#111", textAlign: "center"
          }}>
            {product.name}
          </h2>
        </div>
        
        {/* Right Side: Details & Purchasing Minimalist Layout */}
        <div style={{ flex: "1", padding: "60px 40px", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#fff" }}>
          
          <p style={{ fontWeight: "400", color: "#555", fontSize: "1.2rem", margin: "0 0 30px 0", letterSpacing: "1px" }}>
            RS {product.price}
          </p>
          
          <p style={{ color: "#777", fontSize: "0.95rem", marginBottom: "40px", lineHeight: "1.6" }}>
            {product.description}
          </p>

          {/* Size Selection */}
          <div style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
              <span style={{ fontSize: "0.95rem", color: "#333" }}>Size:</span>
              <button 
                onClick={onOpenSizeChart}
                style={{ 
                  background: "none", border: "none", color: "#777", 
                  textDecoration: "underline", fontSize: "0.85rem", cursor: "pointer", padding: 0 
                }}
              >
                Size chart
              </button>
            </div>
            
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    width: "45px", height: "45px",
                    border: selectedSize === size ? `1px solid #111` : `1px solid #e0e0e0`,
                    backgroundColor: "transparent",
                    color: selectedSize === size ? "#111" : "#888",
                    fontSize: "0.9rem", cursor: "pointer",
                    transition: "border 0.2s, color 0.2s"
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          <button 
            style={{ 
              padding: "18px", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase",
              width: "100%", backgroundColor: "#111", color: "#fff", border: "none", cursor: "pointer",
              opacity: selectedSize ? 1 : 0.6, transition: "background-color 0.2s"
            }}
            onMouseOver={(e) => {
              if(selectedSize) e.currentTarget.style.backgroundColor = "#333";
            }}
            onMouseOut={(e) => {
              if(selectedSize) e.currentTarget.style.backgroundColor = "#111";
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
