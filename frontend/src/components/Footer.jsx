

import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  return (
    <>
      {/* Trust Strip */}
      <div style={{ backgroundColor: "#f9f9f9", padding: "40px 20px", borderTop: "1px solid #eaeaea", borderBottom: "1px solid #eaeaea" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px", textAlign: "center" }}>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            <h4 style={{ margin: 0, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", color: "#111" }}>Free Delivery Islandwide</h4>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "#666" }}>Enjoy free delivery on orders over LKR 10,000.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
            <h4 style={{ margin: 0, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", color: "#111" }}>Easy Exchanges</h4>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "#666" }}>Hassle-free exchanges for eligible orders.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <h4 style={{ margin: 0, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", color: "#111" }}>Top-Notch Support</h4>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "#666" }}>Friendly support team ready to help you.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <h4 style={{ margin: 0, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", color: "#111" }}>Secure Payments</h4>
            <p style={{ margin: 0, fontSize: "0.75rem", color: "#666" }}>Safe and trusted payment methods available.</p>
          </div>

        </div>
      </div>

      <footer style={{ backgroundColor: "#ffffff", padding: "60px 20px 30px", color: "#111", marginTop: "auto", fontFamily: "var(--font-body)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "50px" }}>
          
          {/* About Section */}
          <div>
            <h4 style={{ margin: "0 0 20px 0", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>About</h4>
            <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: "1.8", marginBottom: "15px" }}>
              Velora is a high-end fashion brand that offers a curated collection of exquisite handmade ladies' footwear designed to elevate your everyday walk.
            </p>
            <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: "1.8", marginBottom: "15px" }}>
              If you have any questions, feel free to visit our office located at 123 Fashion Ave, Colombo, Sri Lanka, or contact us via phone at (011) 234-5678.
            </p>
            <a href="mailto:info@velora.com" style={{ fontSize: "0.8rem", color: "#111", textDecoration: "underline" }}>Email us: info@velora.com</a>
          </div>

          {/* Information Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>Information</h4>
            <Link to="/faq" style={{ fontSize: "0.8rem", color: "#666", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#111"} onMouseOut={e => e.currentTarget.style.color = "#666"}>FAQs</Link>
            <Link to="/privacy-policy" style={{ fontSize: "0.8rem", color: "#666", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#111"} onMouseOut={e => e.currentTarget.style.color = "#666"}>Terms & Conditions</Link>
            <Link to="/privacy-policy" style={{ fontSize: "0.8rem", color: "#666", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#111"} onMouseOut={e => e.currentTarget.style.color = "#666"}>Privacy Policy</Link>
            <Link to="/returns" style={{ fontSize: "0.8rem", color: "#666", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#111"} onMouseOut={e => e.currentTarget.style.color = "#666"}>Return Policy</Link>
            <Link to="/shipping" style={{ fontSize: "0.8rem", color: "#666", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#111"} onMouseOut={e => e.currentTarget.style.color = "#666"}>Delivery & Shipping</Link>
          </div>

          {/* My Account */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <h4 style={{ margin: "0 0 8px 0", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>My Account</h4>
            <Link to="/" style={{ fontSize: "0.8rem", color: "#666", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#111"} onMouseOut={e => e.currentTarget.style.color = "#666"}>Profile</Link>
            <Link to="/" style={{ fontSize: "0.8rem", color: "#666", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#111"} onMouseOut={e => e.currentTarget.style.color = "#666"}>Orders</Link>
            <Link to="/" style={{ fontSize: "0.8rem", color: "#666", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#111"} onMouseOut={e => e.currentTarget.style.color = "#666"}>Track My Order</Link>
            <Link to="/contact" style={{ fontSize: "0.8rem", color: "#666", textDecoration: "none", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#111"} onMouseOut={e => e.currentTarget.style.color = "#666"}>Contact Us</Link>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ margin: "0 0 20px 0", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>Newsletter</h4>
            <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: "1.6", marginBottom: "15px" }}>Sign up to our newsletter to receive exclusive offers.</p>
            <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input 
                type="email" 
                placeholder="E-mail" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{ padding: "12px", border: "1px solid #ddd", fontSize: "0.85rem", outline: "none", borderRadius: "0px" }}
              />
              <button type="submit" style={{ padding: "12px", backgroundColor: "#111", color: "#fff", border: "none", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "1px", cursor: "pointer", transition: "background-color 0.2s" }} onMouseOver={e => e.currentTarget.style.backgroundColor = "#333"} onMouseOut={e => e.currentTarget.style.backgroundColor = "#111"}>Subscribe</button>
            </form>
          </div>
        </div>

        {/* Bottom Socials & Copyright */}
        <div style={{ maxWidth: "1200px", margin: "40px auto 0", borderTop: "1px solid #eaeaea", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="https://www.facebook.com/share/17rD6vjqxE/" style={{ color: "#555", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#111"} onMouseOut={e => e.currentTarget.style.color = "#555"}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/velora.step?igsh=emYwdGNjcTIyOTk2" style={{ color: "#555", transition: "color 0.2s" }} onMouseOver={e => e.currentTarget.style.color = "#111"} onMouseOut={e => e.currentTarget.style.color = "#555"}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>

          <p style={{ margin: 0, fontSize: "0.75rem", color: "#888", textTransform: "uppercase", letterSpacing: "1px" }}>
            &copy; 2026 VELORA | MADE WITH <span style={{ color: "red" }}>♥</span> IN LK
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

