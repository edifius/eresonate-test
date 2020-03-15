import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
