import ItemList from "../../components/ItemList/ItemList";
import ItemCount from "../../components/ItemCount/ItemCount";
import { productos } from "../../assets/productos";
import { customPromise } from "../../assets/customPromise"
import { useState } from "react";
import { useEffect } from "react";
import "./ItemListContainer.css";
import CircularProgress from '@mui/material/CircularProgress';

const ItemListContainer = ({greeting}) => {

    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando]  = useState([true])

    useEffect (() =>{
        customPromise (productos)
            .then (respuesta => {
                setListaProductos(respuesta)
                setCargando (false)
            })

    }, []);

    console.log (listaProductos)

    return(
        <>
        <h1>{greeting}</h1>
        {cargando ?     
             <CircularProgress color="secondary" />
        :
            <ItemList listaProductos = {listaProductos}/>
        }   
        <ItemCount inicio={1} stock={15} onAdd={() => {}} />
        </>
        );
};

export default ItemListContainer;