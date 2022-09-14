import ItemCount from "../../components/ItemCount/ItemCount";
import "./ItemListContainer.css";
import {productos} from "../../assets/productos";
import {customPromise} from "../../assets/customPromise";
import { useState } from "react";
import { useEffect } from "react";

const ItemListContainer = ({greeting}) => {

    const [listaProductos, setListaProductos] = useState([]);

    useEffect (() =>{
        customPromise (productos)
            .then (respuesta => setListaProductos(respuesta))
    }, []);

    return(
        <>
        <h1>{greeting}</h1>
        <ItemCount inicio={1} stock={15} onAdd={() => {}} />
        </>
        );
};

export default ItemListContainer;