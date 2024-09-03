
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ebook = location.state?.ebook;

  const handleBackToCatalog = () => {
    navigate('/catalog');
  };

  const handleConfirmPurchase = () => {
    navigate('/payment', { state: { ebook } });
  };

  if (!ebook) {
    return <p>No ebook selected for checkout.</p>;
  }

  return (
    <div style={styles.checkoutContainer}>
      <button onClick={handleBackToCatalog} style={styles.backButton}>Back to Catalog</button>
      <h2 style={styles.heading}>Checkout</h2>
      <div style={styles.checkoutDetails}>
        <img src={ebook.image} alt={ebook.title} style={styles.bookImage} />
        <h3 style={styles.bookTitle}>{ebook.title}</h3>
        <p style={styles.price}>Price: ${ebook.price}</p>
      </div>
      <div style={styles.footer}>
        <button onClick={handleConfirmPurchase} style={styles.confirmButton}>
          Confirm Purchase
        </button>
      </div>
    </div>
  );
};

const styles = {
  checkoutContainer: {
    padding: '20px',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative', 
    
  },
  backButton: {
    backgroundColor: '#ddd',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  checkoutDetails: {
    marginTop: '20px',
  },
  bookImage: {
    width: '200px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  bookTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  price: {
    fontSize: '18px',
    color: '#333',
  },
  footer: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    textAlign: 'right',
  },
  confirmButton: {
    backgroundColor: '#001F3F',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Checkout;
