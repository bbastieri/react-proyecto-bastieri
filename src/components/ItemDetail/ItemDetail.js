import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"


const ItemDetail = ({item}) => {
    return(
        <>
        <h4>{item.name}</h4>
        <img src={item.image} height="150px" />
        <p>{item.description}</p>
        <h4>{"$"+item.price}</h4>
        <ItemCount inicio={1} stock={item.stock} onAdd={() => {}} />
        </>
    )
};

export default ItemDetail;