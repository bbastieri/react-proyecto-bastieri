const ItemDetail = ({productos}) => {
    return(
        <>
        <h4>{productos.name}</h4>
        <img src={productos.image} height="150px" />
        <p>{productos.description}</p>
        <h4>{"$"+productos.price}</h4>
        </>
    )
};

export default ItemDetail;