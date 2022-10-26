import ItemList from "../../components/ItemList/ItemList";
import { useState } from "react";
import { useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {

    const { IdCategoria } = useParams();
    const [listaProductos, setListaProductos] = useState([]);
    const [cargando, setCargando]  = useState([true])

    useEffect (() =>{

        const productsColl = collection (db, 'products');
        const productsCat = query (productsColl, where('category','==',`${IdCategoria}`))
        let prodFiltrados = (IdCategoria === undefined ? productsColl : productsCat)
        getDocs (prodFiltrados)
        .then ((data) => {
        const productList = data.docs.map((products)=>{
            return{
                ...products.data(),
                id: products.id
            } 
                
        })    
        setListaProductos(productList)
        })    
        .finally(()=>{
            setCargando(false);
        })
    }, [IdCategoria])

    return(
        <>
        <h1 class="greeting">{greeting}</h1>

        {cargando ?     
            <div style={{
                width:"100%",
                height: "60vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <CircularProgress color="secondary" />
            </div>
             
        :
            <div class="ItemContainer">
            <ItemList listaProductos = {listaProductos}/>
            </div>
        }   
        </>
        );
};

export default ItemListContainer;