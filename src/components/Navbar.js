import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({onLogout}) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/checkout');
  };
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src="/circles.png" alt="Ebook Logo" style={styles.logoImage} />
        <h1 style={styles.logo}>BOOKSHOP</h1>
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Catalog</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/reviews" style={styles.navLink}>Reviews</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/account" style={styles.navLink}>Account</Link>
        </li>
      </ul>
      <div onClick={handleCartClick} style={styles.cartContainer}>
        <FaShoppingCart style={styles.cartIcon} />
      </div>
      <button onClick={onLogout} style={styles.logoutButton}>  Logout  </button>
    </nav>
  );
};

const styles = {
  logoutButton: {
    backgroundColor: '#001524',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#001524', 
    padding: '5px 20px',
    color: 'white',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '40px',
    marginRight: '10px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    marginLeft: 'auto',
    padding: 0,
  },
  navItem: {
    marginRight: '20px',
    cursor: 'pointer',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  cartContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  cartIcon: {
    fontSize: '24px',
    marginRight: '10px',
  },
};

export default Navbar;
