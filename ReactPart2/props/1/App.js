import React from "react";
import Product from "./Product.js";

function App(){
    let name = "ahmet";
    let price = 32;
    let isAdmin = false;
    return <Product name={name} price={price} isAdmin={isAdmin} />
}

export default App;