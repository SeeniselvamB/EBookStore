import React, { useState } from 'react';
import { Rating, TextField, Button, Typography, List, ListItem } from '@mui/material';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { text: reviewText, rating }]);
    setReviewText('');
    setRating(0);
  };

  return (
    <div style={styles.reviews}>
      <Typography variant="h4" style={styles.heading}>User Reviews</Typography>
      <form onSubmit={handleSubmit} style={styles.form}>
        <TextField
          multiline
          rows={4}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review..."
          variant="outlined"
          style={styles.textarea}
        />
        <div style={styles.ratingContainer}>
          <Typography variant="h6">Rating:</Typography>
          <Rating
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
            style={styles.rating}
          />
        </div>
        <Button type="submit" variant="contained" color="primary" style={styles.button}>Submit Review</Button>
      </form>
      <List style={styles.reviewList}>
        {reviews.map((review, index) => (
          <ListItem key={index} style={styles.reviewItem}>
            <Rating value={review.rating} readOnly />
            <Typography variant="body1" style={styles.reviewText}>{review.text}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const styles = {
  reviews: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  heading: {
    marginBottom: '20px',
  },
  form: {
    marginBottom: '20px',
  },
  textarea: {
    width: '100%',
    marginBottom: '10px',
  },
  ratingContainer: {
    marginBottom: '10px',
  },
  rating: {
    marginTop: '10px',
  },
  button: {
    padding: '10px 20px',
  },
  reviewList: {
    padding: 0,
    listStyleType: 'none',
  },
  reviewItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'column',
  },
  reviewText: {
    marginTop: '10px',
  },
};

export default Reviews;
