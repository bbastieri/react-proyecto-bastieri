import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import ItemListContainer from './containers/ItemListContainer';

const App = () => {
  const message = "Bienvenidx a mi e-commerce";
   
  return (
    <>
    <Header />
    <ItemListContainer greeting ={message}/>
    </>
    );
};

export default App;
