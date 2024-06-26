import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNav from './components/myNav';
import MyFooter from './components/myFooter';
import Welcome from './components/welcome';
import AllTheBooks from './components/allTheBooks'
import { Container } from 'react-bootstrap'

function App () {
  return (
    <>
    <MyNav />
    <Container>
      <Welcome />
      <AllTheBooks />
    </Container>
    <MyFooter />
  </>
)
}

export default App

