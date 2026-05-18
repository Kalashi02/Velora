// src/components/NewsletterPopup.jsx
import { useState, useEffect } from 'react';

function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('velora_newsletter_seen');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // Trigger after 5 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('velora_newsletter_seen', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Normally submit to backend
      alert('Thank you for subscribing!');
      setIsOpen(false);
      localStorage.setItem('velora_newsletter_seen', 'true');
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeIn 0.3s forwards'
      }}
      onClick={handleClose}
    >
      <div 
        className="glass-panel"
        style={{
          width: '90%',
          maxWidth: '500px',
          backgroundColor: 'var(--color-primary)',
          padding: '40px',
          borderRadius: '8px',
          position: 'relative',
          textAlign: 'center',
          animation: 'slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
        }}
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={handleClose} 
          style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--color-text-dark)' }}
        >
          &times;
        </button>
        
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', margin: '0 0 15px 0', textTransform: 'uppercase' }}>Join the Club</h2>
        <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '25px', lineHeight: '1.5' }}>
          Sign up to receive 10% off your first order, plus updates on exclusive drops and styling tips.
        </p>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1,
              padding: '12px 15px',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <button 
            type="submit" 
            className="btn-primary"
            style={{ padding: '12px 25px' }}
          >
            Subscribe
          </button>
        </form>
        <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '15px', margin: '15px 0 0 0' }}>By subscribing, you agree to our Terms of Service & Privacy Policy.</p>
      </div>
    </div>
  );
}

export default NewsletterPopup;
