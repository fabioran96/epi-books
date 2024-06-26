
import React from 'react';
import './App.css';
import MyNav from './components/myNav';
import MyFooter from './components/myFooter';
import Welcome from './components/welcome';
import BookList from './components/booklist';

import scifiBooks from './data/scifi.json';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNav />
        <Welcome />
        <BookList books={scifiBooks} />
        <MyFooter />
      </div>
    );
  }
}

export default App;

