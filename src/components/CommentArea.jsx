import React, { Component } from 'react';
import CommentsList from './CommentsList';
import AddComment from './AddComment';
import Loading from './Loading';
import Error from './Error';

class CommentArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      isLoading: false,
      isError: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin && this.props.asin) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdkNjcxYzNhMzhjYjAwMTVmNjNkMDUiLCJpYXQiOjE3MTk4NDA3ODksImV4cCI6MTcyMTA1MDM4OX0.B4Ac2In37D7jG2-Qdv5MVa8OIekmjB-RbStLDhWn4qY'
          
        }
      });
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data, isLoading: false });
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    return (
      <div>
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <CommentsList comments={this.state.comments} />
        <AddComment asin={this.props.asin} onNewComment={this.fetchComments} />
      </div>
    );
  }
}

export default CommentArea;
