import React, { Component } from 'react';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      rate: 1
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const newComment = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.asin
    };

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNjcxYzNhMzhjYjAwMTVmNjNkMDUiLCJpYXQiOjE3MTk0OTQ0MjksImV4cCI6MTcyMDcwNDAyOX0.6ztBQMvjBOBIkd3y5Jx7qg23CLJX_KDyCm0qpeNttYY'
        }
      });

      if (response.ok) {
        alert('Comment added!');
        this.props.onNewComment(); // Refresh comments list
      } else {
        alert('Error adding comment');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="comment">Comment:</label>
          <input
            type="text"
            id="comment"
            name="comment"
            value={this.state.comment}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="rate">Rate:</label>
          <select
            id="rate"
            name="rate"
            value={this.state.rate}
            onChange={this.handleInputChange}
          >
            {[1, 2, 3, 4, 5].map(rate => (
              <option key={rate} value={rate}>
                {rate}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Comment</button>
      </form>
    );
  }
}

export default AddComment;
