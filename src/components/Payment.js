
import React from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const ebook = location.state?.ebook;

  if (!ebook) {
    return <p>No ebook details available for payment.</p>;
  }

  const handlePayment = () => {
    alert('Payment successful!');
  };

  return (
    <div style={styles.paymentContainer}>
      <form style={styles.paymentForm} onSubmit={handlePayment}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Card Number:</label>
          <input type="text" style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Expiry Date:</label>
          <input type="text" style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>CVV:</label>
          <input type="text" style={styles.input} required />
        </div>
        <button type="submit" style={styles.payButton}>
          Pay ${ebook.price}
        </button>
      </form>
    </div>
  );
};

const styles = {
  paymentContainer: {
    marginTop:'50px',
    marginBottom:'50px',
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    border: '1px solid #ddd',
    borderRadius:'10px',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  paymentDetails: {
    marginBottom: '20px',
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
  paymentForm: {
    marginTop: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    // width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  payButton: {
    backgroundColor: '#001F3F',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  },
};

export default Payment;
