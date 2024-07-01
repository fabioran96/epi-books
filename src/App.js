import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Component } from 'react';
import MyNav from './components/myNav';
import MyFooter from './components/myFooter';
import Welcome from './components/welcome';
import BookList from './components/booklist';
import CommentArea from './components/CommentArea';
import scifiBooks from './data/scifi.json';
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBookAsin: null
    };
  }

  handleBookSelect = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };

  render() {
    return (
      <>
        <MyNav />
        <Container>
          <Welcome />
          <Row>
            <Col md={8}>
              <BookList books={scifiBooks} onBookSelect={this.handleBookSelect} />
            </Col>
            <Col md={4}>
            {this.state.selectedBookAsin ? (
              <CommentArea asin={this.state.selectedBookAsin} />
            ) : (
              <div>Select a book to see comments</div>
            )}
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </>
    );
  }
}

export default App;


