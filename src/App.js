import React from 'react';
import './App.css';
import Header from "./components/Header/Header/Header";
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Cart from './containers/CartView/Cart';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import CartContext from './context/CartContext';


const App = () => {
  const message = "Bienvenidx a mi e-commerce";
   
  return (
    <>
      <BrowserRouter>
        <CartContext>
          <Header />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting ={message}/>}/>
            <Route path='/categoria/:IdCategoria' element={<ItemListContainer greeting ={message}/>}/>
            <Route path='/item/:IdProducto' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
       </CartContext>
      </BrowserRouter>
    </>
    );
};

export default App;


