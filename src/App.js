import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer'; 
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <ToastProvider
      autoDismiss
      autoDismissTimeout={6000}
      placement="bottom-center">
      <div className="App">
        <Header/>
        <Form/>
        <Footer/>
      </div>
    </ToastProvider>
    
  );
}

export default App;
