import React from 'react';
import './App.css';
import Header from "./components/Header/Header/Header";
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Cart from './containers/CartView/Cart';
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {CartContextProvider} from './context/CartContext';
import './containers/ItemListContainer/ItemListContainer.css'


const App = () => {
  const message = "Bienvenidx a nuestro e-commerce!";
   
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Header />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting ={message}/>}/>
            <Route path='/categoria/:IdCategoria' element={<ItemListContainer greeting ={message}/>}/>
            <Route path='/item/:IdProducto' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Form/>}/>
          </Routes>
       </CartContextProvider>
      </BrowserRouter>
      <Footer/>
    </>
    );
};

export default App;


