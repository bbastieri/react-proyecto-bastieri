const Item = ({productos}) => {
    return(
        <>
        <h4>{productos.name}</h4>
        <img src={productos.image} height="150px" />
        <h4>{"$"+productos.price}</h4>
        </>
    )
};

export default Item;