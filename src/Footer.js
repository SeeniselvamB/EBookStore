import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram ,FaEnvelope} from 'react-icons/fa';
import logo from './assets/circles.png'; 

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <img src={logo} alt="Ebook Logo" style={styles.logoImage} />
          <h3 style={styles.heading}>BOOK-IT</h3>
          <p style={styles.text}>
            Book-IT is an online React web application where customers can purchase books online. Users can search for books by title, add them to the shopping cart, and purchase using a credit card transaction.
          </p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.heading}>PRODUCTS</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Book-IT</li>
            <li style={styles.listItem}>Portfolio</li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3 style={styles.heading}>CONTACT</h3>
          <p style={styles.text}>
            <span style={styles.icon}><FaEnvelope style={styles.icon}/></span> techtitan1@gmail.com
          </p>
          <p style={styles.text}>
            <span style={styles.icon}><FaLinkedin style={styles.icon} /></span> LinkedIn
          </p>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>© 2024 Made by Tech_Titan</p>
        <div style={styles.socialIcons}>
          <FaGithub style={styles.icon} />
          <FaLinkedin style={styles.icon} />
          <FaInstagram style={styles.icon} />
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1A202C',
    color: '#E2E8F0',
    padding: '20px 10px',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    paddingLeft:'20px',
    paddingRight:'20px',
  },
  section: {
    flex: '1',
    minWidth: '200px',
    padding: '0 20px',
  },
  heading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.5',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    fontSize: '14px',
    marginBottom: '5px',
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '3px solid #2D3748',
    paddingTop: '30px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  bottomText: {
    fontSize: '14px',
    margin: '0',
    paddingLeft:'250px',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
    margin:'0',
    paddingRight:'250px',
  },
  icon: {
    width: '20px',
    height: '20px',
  },
  logoImage: {
    width: '40px',
    marginRight: '10px',
  },
};

export default Footer;
