import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase"
import { doc, getDoc, collection } from "firebase/firestore"


const ItemDetailContainer = () => {

    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando]  = useState(true);
    const {IdProducto} = useParams();

    useEffect (() =>{
        const productsColl = collection(db,'products');
        const refDoc = doc(productsColl, IdProducto);
        getDoc(refDoc)
        .then((result) =>{
            setListaProductos({
                id: result.id,
                ...result.data()
            })
        })   
        .finally(()=>{
            setCargando(false) 
        })
        
    }, [IdProducto]);

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
