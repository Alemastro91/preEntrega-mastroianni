import React from "react";

const ItemListContainer = (props) => {
    return (
        <div calssName="item-cont">
            <h1>{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer