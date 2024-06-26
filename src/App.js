import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNav from './components/myNav';
import MyFooter from './components/myFooter';
import Welcome from './components/welcome';
import BookList from './components/booklist';
import scifiBooks from './data/scifi.json';
import { Container } from 'react-bootstrap';

function App () {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <BookList books={scifiBooks} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;


