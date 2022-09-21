import React from 'react';
import './App.css';
import Header from "./components/Header/Header/Header";
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  const message = "Bienvenidx a mi e-commerce";
   
  return (
    <>
    <Header />
    <ItemListContainer greeting ={message}/>
    <ItemDetailContainer />
    </>
    );
};

export default App;
