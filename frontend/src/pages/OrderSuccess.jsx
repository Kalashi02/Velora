// src/pages/OrderSuccess.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function OrderSuccess() {
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    // Generate a mock order number
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(`VEL-${randomNum}`);
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="fade-in" style={{
      minHeight: "75vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      textAlign: "center"
    }}>
      <div style={{
        width: "80px",
        height: "80px",
        backgroundColor: "#e8f5e9",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "30px"
      }}>
        <svg fill="none" stroke="#2e7d32" strokeWidth="3" viewBox="0 0 24 24" style={{ width: "40px", height: "40px" }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 style={{ fontSize: "2.5rem", fontWeight: "300", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 15px 0", color: "#111" }}>
        Thank You!
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#555", maxWidth: "500px", margin: "0 0 10px 0" }}>
        Your order has been successfully placed. We are processing it and will send you an email confirmation shortly.
      </p>

      <div style={{ margin: "25px 0", padding: "15px 30px", backgroundColor: "#fafafa", border: "1px solid #d9d9d9", borderRadius: "6px" }}>
        <p style={{ margin: 0, fontSize: "0.9rem", color: "#777", textTransform: "uppercase", letterSpacing: "1px" }}>Order Reference</p>
        <p style={{ margin: "5px 0 0 0", fontSize: "1.2rem", fontWeight: "600", color: "#333", letterSpacing: "1px" }}>{orderNumber}</p>
      </div>

      <Link to="/shop" className="btn-primary" style={{ marginTop: "20px", padding: "16px 40px", fontSize: "1.05rem" }}>
        Continue Shopping
      </Link>
    </main>
  );
}

export default OrderSuccess;
