import React from 'react';
import './App.css';
import MyNav from './components/myNav';
import MyFooter from './components/myFooter';
import Welcome from './components/welcome';
import AllTheBooks from './components/allTheBooks';


function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}


export default App;
