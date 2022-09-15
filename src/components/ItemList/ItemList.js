import Item from "../Item/Item"

const ItemList = ({listaProductos}) => {
    console.log (listaProductos)
    return(
        <>
            {listaProductos.map((pr, i) => <Item key={`${pr.productos}-${i}`} productos ={pr}/>)}
        </>
    );
}

export default ItemList;

