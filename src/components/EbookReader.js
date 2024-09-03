import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EbookReader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ebook } = location.state || {};

  const [showPdf, setShowPdf] = useState(false);

  if (!ebook) {
    return <p>No ebook details available.</p>;
  }

  const { title, image, price, author, description, pdfFile } = ebook;

  const handleContinueShopping = () => {
    navigate('/payment');
  };

  const handleReadBook = () => {
    setShowPdf(true);
  };

  const handleDownloadBook = () => {
    if (pdfFile) {
      const link = document.createElement('a');
      link.href = pdfFile;
      link.download = `${title}.pdf`;
      link.click();

      const existingDownloads = JSON.parse(localStorage.getItem('downloadedBooks')) || [];
      const newDownload = { title, author, url: pdfFile, downloadDate: new Date().toISOString() };

      const isAlreadyDownloaded = existingDownloads.some((b) => b.title === newDownload.title);
      
      if (!isAlreadyDownloaded) {
        existingDownloads.push(newDownload);
        localStorage.setItem('downloadedBooks', JSON.stringify(existingDownloads));
        alert('Book downloaded successfully!');
      } else {
        alert('This book has already been downloaded.');
      }
    } else {
      alert('Download not available for this book.');
    }
  };

  return (
    <div style={styles.reader}>
      <h2 style={styles.heading}>{title}</h2>
      <div style={styles.content}>
        <div style={styles.imageContainer}>
          <img src={image} alt={title} style={styles.bookImage} />
        </div>
        <div style={styles.details}>
          <p style={styles.bookAuthor}>by {author} (Author)</p>
          <p style={styles.bookDescription}>{description}</p>
          <p style={styles.bookPrice}>Price: ₹{price}.00</p>
        </div>
      </div>
      {pdfFile && (
        <div style={styles.pdfContainer}>
          <iframe
            src={pdfFile}
            title="Ebook PDF Viewer"
            style={styles.pdfViewer}
          />
        </div>
      )}
      <button onClick={handleDownloadBook} style={styles.downloadButton}>
            DOWNLOAD THE BOOK
          </button>
      <button onClick={handleContinueShopping} style={styles.continueButton}>
        CONTINUE SHOPPING
      </button>
    </div>
  );
};

const styles = {
  reader: {
    padding: '20px',
    margin: '20px 220px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookImage: {
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '4px',
  },
  details: {
    flex: 2,
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bookAuthor: {
    fontSize: '16px',
    marginBottom: '10px',
    fontStyle: 'italic',
  },
  bookDescription: {
    fontSize: '14px',
    marginBottom: '10px',
    lineHeight: '1.6',
  },
  bookPrice: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  readButton: {
    marginTop: '20px',
    padding: '10px 30px',
    fontSize: '16px',
    backgroundColor: '#1a73e8',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '250px',
    textAlign: 'center',
  },
  downloadButton: {
    marginTop: '10px',
    padding: '10px 30px',
    fontSize: '16px',
    backgroundColor: '#001F3F',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '250px',
    textAlign: 'center',
  },
  pdfContainer: {
    marginTop: '20px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  pdfViewer: {
    width: '100%',
    height: '600px',
  },
  continueButton: {
    marginTop: '20px',
    padding: '10px 30px',
    fontSize: '16px',
    backgroundColor: '#001F3F',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '250px',
      textAlign: 'center',
  },
};

export default EbookReader;
