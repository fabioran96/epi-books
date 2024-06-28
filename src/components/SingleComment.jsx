import React from 'react';

const SingleComment = ({ comment }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/${comment._id}", {
        method: 'DELETE',
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNjcxYzNhMzhjYjAwMTVmNjNkMDUiLCJpYXQiOjE3MTk0OTQ0MjksImV4cCI6MTcyMDcwNDAyOX0.6ztBQMvjBOBIkd3y5Jx7qg23CLJX_KDyCm0qpeNttYY"
          
        }
      });
      if (response.ok) {
        alert('Comment deleted!');
      }
    } catch (error) {
      console.log('Error deleting comment:', error);
    }
  };

  return (
    <div className="mb-2">
      <p>{comment.comment}</p>
      <small>Rating: {comment.rate}</small>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default SingleComment;
