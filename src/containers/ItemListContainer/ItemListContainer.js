import ItemList from "../../components/ItemList/ItemList";
import ItemCount from "../../components/ItemCount/ItemCount";
import { productos } from "../../assets/productos";
import { customPromise } from "../../assets/customPromise"
import { useState } from "react";
import { useEffect } from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {

    const [listaProductos, setListaProductos] = useState([]);

    useEffect (() =>{
        customPromise (productos)
            .then (respuesta => setListaProductos(respuesta))
    }, []);

    console.log (listaProductos)

    return(
        <>
        <h1>{greeting}</h1>
        <ItemList listaProductos = {listaProductos}/>
        <ItemCount inicio={1} stock={15} onAdd={() => {}} />
        </>
        );
};

export default ItemListContainer;