import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserAccount = () => {
  const [downloadedBooks, setDownloadedBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedDownloadedBooks = JSON.parse(localStorage.getItem('downloadedBooks')) || [];
    setDownloadedBooks(storedDownloadedBooks);
  }, []);

  const handleDownloadAgain = (bookUrl) => {
    const link = document.createElement('a');
    link.href = bookUrl;
    link.download = bookUrl.split('/').pop();
    link.click();
  };

  return (
    <div style={styles.account}>
      <h2 style={styles.heading}>User Account</h2>
      <p style={styles.description}>
        Manage your ebook library and download history here.
      </p>

      <div style={styles.librarySection}>
        <h3 style={styles.subheading}>Your Ebook Library</h3>
        {downloadedBooks.length > 0 ? (
          <ul style={styles.ebookList}>
            {downloadedBooks.map((ebook, index) => (
              <li key={index} style={styles.ebookItem}>
                <span style={styles.ebookTitle}>{ebook.title}</span>
                <span style={styles.ebookDate}>
                  Downloaded on: {new Date(ebook.downloadDate).toLocaleDateString()}
                </span>
                <button onClick={() => handleDownloadAgain(ebook.url)} style={styles.downloadButton}>
                  Download Again
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p style={styles.noEbooks}>No ebooks downloaded yet.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  account: {
    padding: '20px',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
    textAlign: 'center',
  },
  description: {
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  librarySection: {
    marginTop: '20px',
  },
  subheading: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  ebookList: {
    listStyleType: 'none',
    padding: '0',
  },
  ebookItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    alignItems: 'center',
  },
  ebookTitle: {
    fontWeight: 'bold',
  },
  ebookDate: {
    fontStyle: 'italic',
    color: '#555',
  },
  noEbooks: {
    textAlign: 'center',
    color: '#888',
  },
  downloadButton: {
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '3px',
  },
};

export default UserAccount;
