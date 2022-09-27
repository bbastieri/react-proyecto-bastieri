import React from 'react';
import './App.css';
import Header from "./components/Header/Header/Header";
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  const message = "Bienvenidx a mi e-commerce";
   
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/"/>
      <Route path="/categoria/tops"/>
      <Route path="/categoria/bombis"/>
      <Route path="/categoria/corpis"/>
      <Route path="/categoria/medias"/>
    </Routes>
    </BrowserRouter>
    </>
    );
};

export default App;

/* <Header />
<ItemListContainer greeting ={message}/>
<ItemDetailContainer /> */
