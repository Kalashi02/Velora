// src/pages/Policies.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PolicyLayout = ({ title, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="fade-in" style={{ padding: "80px 20px", maxWidth: "800px", margin: "0 auto", minHeight: "60vh" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "300", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>
        {title}
      </h1>
      <div style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#444" }}>
        {children}
      </div>
      <div style={{ marginTop: "80px", textAlign: "center" }}>
        <Link to="/contact" style={{ display: "inline-block", borderBottom: "1px solid #111", paddingBottom: "2px", letterSpacing: "1px", textTransform: "uppercase", fontSize: "0.9rem", color: "#111" }}>Contact Customer Care</Link>
      </div>
    </main>
  );
};

export const FAQ = () => (
  <PolicyLayout title="Frequently Asked Questions">
    <h3 style={{ marginTop: "30px", fontWeight: "500", fontSize: "1.2rem", color: "#111" }}>What payment methods do you accept?</h3>
    <p>We accept all major credit cards including Visa, Mastercard, AMEX, as well as Cash on Delivery (COD) for domestic orders.</p>
    
    <h3 style={{ marginTop: "30px", fontWeight: "500", fontSize: "1.2rem", color: "#111" }}>Where are Velora shoes made?</h3>
    <p>Our shoes are meticulously handcrafted in our partner artisan workshops using locally sourced premium materials.</p>
    
    <h3 style={{ marginTop: "30px", fontWeight: "500", fontSize: "1.2rem", color: "#111" }}>How do I know my size?</h3>
    <p>We provide a comprehensive size guide on every product page. If you're between sizes, we generally recommend sizing up for closed-toe styles.</p>
  </PolicyLayout>
);

export const Shipping = () => (
  <PolicyLayout title="Shipping & Delivery">
    <p>At Velora, we strive to deliver your pieces as quickly and securely as possible. All orders are processed within 1-2 business days.</p>
    
    <h3 style={{ marginTop: "30px", fontWeight: "500", fontSize: "1.2rem", color: "#111" }}>Domestic Delivery</h3>
    <p>We offer a flat-rate shipping fee of RS 450 island-wide. Delivery typically takes 2-4 business days via our premium courier partners.</p>
    
    <h3 style={{ marginTop: "30px", fontWeight: "500", fontSize: "1.2rem", color: "#111" }}>Order Tracking</h3>
    <p>Once your order has been dispatched, you will receive a tracking link via email to monitor its journey to your doorstep.</p>
  </PolicyLayout>
);

export const Returns = () => (
  <PolicyLayout title="Returns & Exchanges">
    <p>We want you to love your Velora shoes. If they aren't the perfect fit, we gladly accept returns and exchanges within 30 days of receipt.</p>
    
    <h3 style={{ marginTop: "30px", fontWeight: "500", fontSize: "1.2rem", color: "#111" }}>Conditions</h3>
    <p>Shoes must be returned unworn, in their original condition, and with all original packaging intact. Please try shoes strictly on a carpeted surface to avoid scuff marks.</p>
    
    <h3 style={{ marginTop: "30px", fontWeight: "500", fontSize: "1.2rem", color: "#111" }}>Process</h3>
    <p>To initiate a return please contact our customer care team with your order number. Return shipping costs are the responsibility of the customer unless the item is faulty.</p>
  </PolicyLayout>
);

export const PrivacyPolicy = () => (
  <PolicyLayout title="Privacy Policy">
    <p>Your privacy is of utmost importance to us at Velora.</p>
    
    <h3 style={{ marginTop: "30px", fontWeight: "500", fontSize: "1.2rem", color: "#111" }}>Information Collection</h3>
    <p>We collect essential information required to process your order, such as your name, shipping address, and email. Your payment details are securely processed completely off-site.</p>
    
    <h3 style={{ marginTop: "30px", fontWeight: "500", fontSize: "1.2rem", color: "#111" }}>Usage</h3>
    <p>Your email address is only used for order updates, and if you opt-in, our exclusive newsletter. We never sell or share your data with third parties.</p>
  </PolicyLayout>
);
