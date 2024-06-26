import React, { Component } from 'react';
import { Container, Row, Col, FormControl } from 'react-bootstrap';
import SingleBook from './singleBook';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
  }

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    return (
      <Container>
        <FormControl
          type="text"
          placeholder="Search by title"
          className="my-4"
          value={this.state.searchQuery}
          onChange={this.handleSearch}
        />
        <Row>
          {filteredBooks.map(book => (
            <Col sm={12} md={6} lg={4} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
