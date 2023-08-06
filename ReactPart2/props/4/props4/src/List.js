import React from "react";


function List(props){
    let titleText = `Türkiye'nin ${props.type}`;
    if(props.children instanceof Array){
        titleText += 'leri';
    }else{
        titleText += 'si';
    }

    return(
        <>
            <h1>
                {titleText}
            </h1>
            <ul>
                {props.children}
            </ul>
        </>
    )
}


export default List;