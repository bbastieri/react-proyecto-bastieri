import { productos } from "../../assets/productos";
import { customPromise } from "../../assets/customPromise"
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando]  = useState([true]);
    const {IdProducto} = useParams ();
    console.log (IdProducto);

    useEffect (() =>{
        customPromise (productos)
            .then (respuesta => {
                setListaProductos(respuesta[parseInt(IdProducto)])
                setCargando (false)
            })

    }, [IdProducto]);

    console.log (listaProductos)


    return(
        <>
        {cargando ?     
             <CircularProgress color="secondary" />
        :
            <ItemDetail item = {listaProductos}/>
        }   
        </>
    )
}

export default ItemDetailContainer
