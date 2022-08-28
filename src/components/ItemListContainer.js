import ItemCount from "./ItemCount";

const itemListContainer = ({nameEcommerce}) => {
    console.log("ItemListContainer");
    return (
        <div className="ItemListContainer">
            <h1>ItemListContainer-Ecommerce</h1>
            <h2>Tienda ficticia</h2>
            <ItemCount />
        </div>
    );
};

export default itemListContainer;
