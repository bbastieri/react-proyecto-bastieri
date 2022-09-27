import ItemList from "../../components/ItemList/ItemList";
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
            if (IdCategoria) {
                const productosFiltrados = productos.filter(productos => productos.category === IdCategoria)
                setListaProductos(productosFiltrados)
            } else {
                setListaProductos(productos)
            }
            })
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
        </>
        );
};

export default ItemListContainer;