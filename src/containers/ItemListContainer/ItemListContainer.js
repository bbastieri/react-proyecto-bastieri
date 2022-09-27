import ItemList from "../../components/ItemList/ItemList";
import ItemCount from "../../components/ItemCount/ItemCount";
import { productos } from "../../assets/productos";
import { customPromise } from "../../assets/customPromise"
import { useState } from "react";
import { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

    let { IdCategoria } = useParams();
    console.log (IdCategoria);

    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando]  = useState([true])

    useEffect (() =>{
        customPromise (productos).then (respuesta => {setListaProductos(respuesta)
            setCargando (false)
            })
    }, [])
        customPromise (productos, IdCategoria, 'category').then(respuesta =>{setListaProductos(respuesta)
    }, [IdCategoria])

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