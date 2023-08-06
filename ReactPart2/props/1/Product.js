import React from "react";

function Product(props){
    return(
        <div>
            <h1>
                {props.name}
            </h1>
            <p>
                {props.price}
            </p>
            <p>
                {props.isAdmin}
            </p>
        </div>
    )
}

export default Product;