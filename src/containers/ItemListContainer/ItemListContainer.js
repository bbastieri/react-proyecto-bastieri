import ItemCount from "../../components/ItemCount/ItemCount";
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return(
        <>
        <h1>{greeting}</h1>
        <ItemCount inicio={1} stock={15} onAdd={() => {}} />
        </>
        );
};

export default ItemListContainer;