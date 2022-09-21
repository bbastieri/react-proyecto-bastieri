import { productos } from "../../assets/productos";
import { customPromise } from "../../assets/customPromise"
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import CircularProgress from '@mui/material/CircularProgress';

const ItemDetailContainer = () => {

    
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
        {cargando ?     
             <CircularProgress color="secondary" />
        :
            <ItemDetail listaProductos = {listaProductos}/>
        }   
        </>
    )
}

export default ItemDetailContainer
